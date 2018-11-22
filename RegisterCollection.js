

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
}

module.exports = RegisterCollection;