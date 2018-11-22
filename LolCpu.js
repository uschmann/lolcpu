const opcodes = require('./opcodes');

const TAG = '[CPU]';

class LolCpu {

    constructor(memory, registers) {
        this.prog = null;
        this.memory = memory;
        this.reg = registers;
        this.reset();
    }

    reset()
    {
        this.reg.getRegister('pc').setValue(0);
        this.reg.getRegister('sp').setValue(this.memory.getSize() - 1);
        this.reg.getRegister('a').setValue(0);
        this.reg.getRegister('b').setValue(0);
        this.reg.getRegister('c').setValue(0);
        this.reg.getRegister('d').setValue(0);

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
        let opcode = opcodes[instruction.opcode];
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
}

module.exports = LolCpu;