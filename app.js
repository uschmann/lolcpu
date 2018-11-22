const Memory = require('./Memory');
const LolCpu = require('./LolCpu');
const RegisterCollection = require('./RegisterCollection');
const Register = require('./Register');

const prog = {
    labels: {

    },
    instructions: [
        { opcode: 'load', params: ['value', 'a', 100] },
        { opcode: 'load', params: ['reg', 'b', 'a'] },
        { opcode: 'load', params: ['memory', 'c', 0] },
        { opcode: 'noop', params: [] },
        { opcode: 'noop', params: [] },
        { opcode: 'noop', params: [] },
        { opcode: 'jump', params: [0] }
    ]
};



const opcodes = require('./opcodes');
const registers = new RegisterCollection();
registers.addRegister('a', new Register());
registers.addRegister('b', new Register());
registers.addRegister('c', new Register());
registers.addRegister('d', new Register());
registers.addRegister('pc', new Register());
registers.addRegister('sp', new Register());

const memory = new Memory(0x100);

const cpu = new LolCpu(memory, registers, opcodes);
cpu.loadProgram(prog);
setInterval(() => {
    registers.log();
    cpu.step();
}, 100);
