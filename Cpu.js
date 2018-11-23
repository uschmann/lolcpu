const TAG = '[CPU]';

class LolCpu {

    constructor(memory, registers, decoder, flags) {
        this.prog = null;
        this.memory = memory;
        this.reg = registers;
        this.flags = flags;
        this.decoder = decoder;
        this.reset();
    }

    reset()
    {
        this.reg.getRegister('sp').setValue(this.memory.getSize() - 1);
        this.reg.getRegister('pc').reset();
        this.reg.getRegister('a').reset();
        this.reg.getRegister('b').reset();
        this.reg.getRegister('c').reset();
        this.reg.getRegister('d').reset();

        this.memory.reset();

        this.isStopped = false;
    }

    step()
    {
        // Do nothing if CPU is stopped.
        if(this.isStopped) {
            return;
        }

        if(this.prog === null) {
            throw new Error('[LolCpu] No program is loaded. Please call loadProgram(prog)');
        }
        
        // fetch
        const pc = this.reg.getRegister('pc');
        let instruction = this.prog.instructions[pc.getValue()];
        if(instruction === undefined) {
            throw new Error('PC out of bound');
        }
        // decode
        let opcode = this.decoder.fetch(instruction.opcode);
        
        // Log the instruction
        console.log('[CPU] ' + opcode.dissamble(instruction.params));

        // Increment program counter
        pc.setValue(pc.getValue() + 1);
        
        // execute instruction
        opcode.exec(this, this.prog, instruction.params);
    }

    loadProgram(prog) {
        this.prog = prog;
        this.reset();
    }

    stop() {
        this.isStopped = true;
        console.log(TAG + ' Cpu is stopped');
    }

    isRunning() {
        return !this.isStopped;
    }

    getRegister(reg) {
        return this.reg.getRegister(reg);
    }

    setFlag(flag, value) {
        this.flags.getFlag(flag).setValue(value);
    }

    checkFlag(flag) {
        return this.flags.getFlag(flag).getValue();
    }
    
}

module.exports = LolCpu;