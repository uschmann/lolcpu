const Memory = require('./Memory');
const LolCpu = require('./LolCpu');


const prog = {
    labels: {

    },
    instructions: [
        { opcode: 'noop', params: [] },
        { opcode: 'noop', params: [] },
        { opcode: 'noop', params: [] },
        { opcode: 'jump', params: [0] }
    ]
};


const cpu = new LolCpu(new Memory(0xFF));
cpu.loadProgram(prog);
setInterval(() => {
    cpu.step();
}, 250);
