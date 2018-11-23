const TAG = '[Decoder]';

class Decoder {

    constructor(opcodes) {
        this.opcodes = opcodes;
    }

    fetch(operation) {
        const opcode = this.opcodes[operation];
        if(opcode === undefined) {
            throw new Error(`Unknown opcode: ${operation}`);
        }
        return opcode;
    }
}

module.exports = Decoder;