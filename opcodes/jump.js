module.exports = {
    exec (cpu, prog, params) {
        const flag = params[1];
        if(flag === undefined || cpu.checkFlag(flag)) {
            cpu.reg.getRegister('pc').setValue(params[0]);
        }
    },

    dissamble(params) {
        const flag = params[1];
        return 'jump ' + params[0] + (flag !== undefined ? (' ' + flag) : '');
    }

};