const TAG = '[FlagCollection]';

class FlagCollection {

    constructor() {
        this.flags = {};
    }

    addFlag(key, flag) {
        this.flags[key] = flag;
    }

    getFlag(key) {
        return this.flags[key];
    }

}

module.exports = FlagCollection;