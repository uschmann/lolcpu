const opcodes = require('./opcodes');

const TAG = '[CPU]';

class LolCpu {

    constructor(memory) {
        this.prog = null;
        this.memory = memory;
        this.reset();
    }

    reset()
    {
        this.reg = {
            pc: 0x00,
            sp: this.memory.getSize() - 1,
            a: 0x00,
            b: 0x00,
            c: 0x00,
            d: 0x00,
            e: 0x00,
            f: 0x00,
            g: 0x00,
        }

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
        let instruction = this.prog.instructions[this.reg.pc];
        if(instruction === undefined) {
            throw new Error('PC out of bound');
        }
        // decode
        let opcode = opcodes[instruction.opcode];
        if(opcode === undefined) {
            throw new Error('Illegal opcode: ' + instruction.opcode);
        }
        
        // Log current instruction
        console.log(TAG + ' ' + this.reg.pc + ' : ' + opcode.dissamble(instruction.params));

        this.reg.pc ++;
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