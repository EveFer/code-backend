const calculadora = require('./calculadora')

test('Should adds numbers', () => {
    expect(calculadora.sumar(4,5)).toBe(9)
})