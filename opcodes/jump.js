module.exports = {
    exec (cpu, prog, params) {
        cpu.reg.pc = params[0];
    },

    dissamble(params) {
        return 'jump ' + params[0];
    }

};