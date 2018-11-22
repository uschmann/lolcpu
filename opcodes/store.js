/**
 * Write value of register in param 1
 * to memory address in param 0.
 */
module.exports = {
    exec (cpu, prog, params) {
        const reg = cpu.getRegister(params[1]);
        cpu.memory.setValue(params[0], reg.getValue());
    },

    dissamble(params) {
        return 'store ' + params[0] + ' ' + params[1];
    }

};