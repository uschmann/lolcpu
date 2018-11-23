
class Memory {

    constructor(size)
    {
        this.size = size;
        this.reset();
    }

    getValue(addr) {
        if(addr < 0 || addr >= this.size) {
            throw new Error('[Memory] Address is out of bounds');
        }
        return this.memory[addr];
    }

    setValue(addr, value) {
        if(addr < 0 || addr >= this.size) {
            throw new Error('[Memory] Address is out of bounds');
        }
        this.memory[addr] = value;
    }

    reset() {
        this.memory = [];
        for(let i = 0; i < this.size; i++) {
            this.memory.push(0);
        }
    }

    getSize()
    {
        return this.size;
    }
};

module.exports = Memory;