

const TAG = ['Register'];

class Register {

    constructor() {
        this.reset();
    }

    getValue() {
        return this.value;
    }

    setValue(value) {
        this.value = value;
    }

    reset() {
        this.value = 0;
    }
}

module.exports = Register;