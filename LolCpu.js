const TAG = '[CPU]';

class LolCpu {

    constructor(memory, registers, opcodes, flags) {
        this.opcodes = opcodes;
        this.prog = null;
        this.memory = memory;
        this.reg = registers;
        this.flags = flags;

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
        let opcode = this.opcodes[instruction.opcode];
        if(opcode === undefined) {
            throw new Error('Illegal opcode: ' + instruction.opcode);
        }
        
        // Log current instruction
        console.log(TAG + ' ' + pc.getValue() + ' : ' + opcode.dissamble(instruction.params));

        pc.setValue(pc.getValue() + 1);
        // execute

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