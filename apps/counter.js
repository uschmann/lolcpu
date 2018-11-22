module.exports = {
    labels: {

    },
    instructions: [
        { opcode: 'load', params: ['value', 'a', 5] },
        { opcode: 'dec', params: ['a'] },
        { opcode: 'jump', params: [4, 'zero'] },
        { opcode: 'jump', params: [1] },
        { opcode: 'stop', params: [] },
    ]
}