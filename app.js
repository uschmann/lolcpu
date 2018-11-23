const Memory = require('./Memory');
const LolCpu = require('./LolCpu');
const RegisterCollection = require('./RegisterCollection');
const Register = require('./Register');
const FlagCollection = require('./FlagCollection');
const Flag = require('./Flag');

const prog = {
    labels: {

    },
    instructions: [
        { opcode: 'load', params: ['value', 'a', 100] },
        { opcode: 'load', params: ['reg', 'b', 'a'] },
        { opcode: 'store', params: [0, 'a'] },
        { opcode: 'load', params: ['memory', 'c', 0] },
        { opcode: 'inc', params: ['d'] },
        { opcode: 'jump', params: [0, 'zero'] },
        { opcode: 'jump', params: [0] },
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

const flags = new FlagCollection();
flags.addFlag('zero', new Flag());
flags.addFlag('neg', new Flag());

const memory = new Memory(0x100);

const cpu = new LolCpu(memory, registers, opcodes, flags);
cpu.loadProgram(require('./apps/counter'));
setInterval(() => {
    if(cpu.isRunning()) {
       registers.log();
       flags.log();
    }
    cpu.step();
}, 500);
