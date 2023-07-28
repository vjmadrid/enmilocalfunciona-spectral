const { add, subtract, multiply } = require('../src/calculator');

test('Adding two numbers', (done) => {
    expect(add(0, 0)).toStrictEqual(0)
    expect(add(0, 10)).toStrictEqual(10)
    expect(add(10, 10)).toStrictEqual(20)
    expect(add(500, 100)).toStrictEqual(600)
    done()
})

test('Subtracting two numbers', (done) => {
    expect(subtract(0, 0)).toStrictEqual(0)
    expect(subtract(0, 10)).toStrictEqual(-10)
    expect(subtract(10, 10)).toStrictEqual(0)
    expect(subtract(500, 100)).toStrictEqual(400)
    done()
})

test('Multiplying two numbers', (done) => {
    expect(multiply(0, 10)).toStrictEqual(0)
    expect(multiply(1, 10)).toStrictEqual(10)
    expect(multiply(10, 10)).toStrictEqual(100)
    expect(multiply(500, 100)).toStrictEqual(50000)
    done()
})
