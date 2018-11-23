module.exports = {

    exec (cpu, prog, params) {
        const mode = params[0];
        const reg = cpu.getRegister(params[1]);
        
        let value = 0;
        switch(mode) {
            case 'reg':
                value = cpu.getRegister(params[2]).getValue();
                break;
            case 'value':
                value = params[2];
                break;
            default:
                throw new Error('Unsopported parameter');
        }

        reg.setValue(reg.getValue() - value);
        
        cpu.setFlag('zero', reg.getValue() == 0);
        cpu.setFlag('neg', reg.getValue() < 0);
    },

    dissamble(params) {
        return 'sub' + ' ' + params[1] + ' ' + params[2];
    }

};