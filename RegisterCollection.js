

const TAG = '[RegisterCollection]';


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
        for(let reg in this.registers) {
            console.log(reg + '\t' + this.getRegister(reg).getValue());
        }
    }
}

module.exports = RegisterCollection;