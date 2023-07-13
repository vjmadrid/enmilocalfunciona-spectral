const { add, subtract, multiply } = require('../src/calculator');

describe("Testing with async", () => {

    test('Adding two numbers', async () => {
        expect(add(0, 0)).toStrictEqual(0)
        expect(add(0, 10)).toStrictEqual(10)
        expect(add(10, 10)).toStrictEqual(20)
        expect(add(500, 100)).toStrictEqual(600)
    })

    test('Subtracting two numbers', async () => {
        expect(subtract(0, 0)).toStrictEqual(0)
        expect(subtract(0, 10)).toStrictEqual(-10)
        expect(subtract(10, 10)).toStrictEqual(0)
        expect(subtract(500, 100)).toStrictEqual(400)
    })

    test('Multiplying two numbers', async () => {
        expect(multiply(0, 10)).toStrictEqual(0)
        expect(multiply(1, 10)).toStrictEqual(10)
        expect(multiply(10, 10)).toStrictEqual(100)
        expect(multiply(500, 100)).toStrictEqual(50000)
    })

})
