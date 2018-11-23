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

    log() {
        let output = '';
        for(let flag in this.flags) {
            output += ` ${flag}: [${this.getFlag(flag).getValue() ? 'X' : ' '}]`;
        }
        console.log(output);
    }
}

module.exports = FlagCollection;