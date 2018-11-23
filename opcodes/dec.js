module.exports = {

    exec (cpu, prog, params) {
        const reg = cpu.getRegister(params[0]);
        reg.setValue(reg.getValue() - 1);
        
        cpu.setFlag('zero', reg.getValue() == 0);
        cpu.setFlag('neg', reg.getValue() < 0);
    },

    dissamble(params) {
        return 'dec' + ' ' + params[0];
    }

};