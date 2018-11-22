

const TAG = ['Register'];

class Register {

    constructor() {
        this.value = 0;
    }

    getValue() {
        return this.value;
    }

    setValue(value) {
        this.value = value;
    }

}

module.exports = Register;