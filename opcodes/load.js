module.exports = {
    exec (cpu, prog, params) {
        const reg = cpu.getRegister(params[1]);
        switch(params[0]) {
            case 'reg':
                reg.setValue(cpu.getRegister(params[2]).getValue());
            break;
            case 'value':
                reg.setValue(params[2]);
            break;
            case 'memory':
                reg.setValue(cpu.memory.getValue(params[2]));
            break;
            default: 
                throw new Error('[store] Unsupported parameter');
        }
    },

    dissamble(params) {
        return 'load ' + params[1] + ' ' + params[2];
    }

};