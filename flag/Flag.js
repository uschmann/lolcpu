const TAG = '[Flag]';

class Flag {

    constructor() {
        this.value = false;
    }

    setValue(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }
}

module.exports = Flag;