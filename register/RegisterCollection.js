

const TAG = '[Registers]';


class RegisterCollection {

    constructor() {
        this.registers = {};
    }

    addRegister(key, register) {
        this.registers[key] = register;
    }

    getRegister(key) {
        return this.registers[key];
    }

    log() {
        let output = '';
        for(let reg in this.registers) {
            output += ` ${reg}: ${this.getRegister(reg).getValue()};`;
        }
        console.log(output);
    }
}

module.exports = RegisterCollection;