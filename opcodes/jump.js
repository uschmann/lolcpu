module.exports = {
    exec (cpu, prog, params) {
        cpu.reg.getRegister('pc').setValue(params[0]);
    },

    dissamble(params) {
        return 'jump ' + params[0];
    }

};