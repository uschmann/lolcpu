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
        { opcode: 'noop', params: [] },
        { opcode: 'noop', params: [] },
        { opcode: 'noop', params: [] },
        { opcode: 'jump', params: [0] }
    ]
};


const registers = new RegisterCollection();
registers.addRegister('a', new Register());
registers.addRegister('b', new Register());
registers.addRegister('c', new Register());
registers.addRegister('d', new Register());
registers.addRegister('pc', new Register());
registers.addRegister('sp', new Register());

const memory = new Memory(0xFF);

const cpu = new LolCpu(memory, registers);
cpu.loadProgram(prog);
setInterval(() => {
    cpu.step();
    console.log(cpu.reg.getRegister('a').getValue());
}, 0);
