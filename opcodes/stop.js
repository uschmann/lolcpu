module.exports = {
    exec (cpu, prog, params) {
        cpu.stop();
    },

    dissamble(params) {
        return 'stop'
    }

};