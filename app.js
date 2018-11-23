const Memory = require('./memory/Memory');
const LolCpu = require('./Cpu');
const RegisterCollection = require('./register/RegisterCollection');
const Register = require('./register/Register');
const FlagCollection = require('./flag/FlagCollection');
const Flag = require('./flag/Flag');
const Decoder = require('./Decoder');

const decoder = new Decoder(require('./opcodes'));
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

const cpu = new LolCpu(memory, registers, decoder, flags);
cpu.loadProgram(require('./apps/counter'));
setInterval(() => {
    if(true && cpu.isRunning()) {
       registers.log();
       flags.log();
    }

    try {
        cpu.step();
    }
    catch(error) {
        console.log(error);
        cpu.stop();
    }
    
}, 100);
