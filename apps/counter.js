module.exports = {
    labels: {

    },
    instructions: [
        { opcode: 'load', params: ['value', 'a', 10] },
        { opcode: 'load', params: ['value', 'b', 8] },
        { opcode: 'sub', params: ['reg', 'a', 'b'] },
        { opcode: 'jump', params: [5, 'neg'] },
        { opcode: 'jump', params: [2] },
        { opcode: 'stop', params: [] },
    ]
}