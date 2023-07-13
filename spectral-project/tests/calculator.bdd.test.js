const { add, subtract, multiply } = require('../src/calculator');

describe('multiply function', () => {

    it('should return the product of two numbers', () => {
        expect(multiply(2, 3)).toEqual(6);
        expect(multiply(0, 5)).toEqual(0);
        expect(multiply(-2, 3)).toEqual(-6);
        expect(multiply(-2, -3)).toEqual(6);
    });

});

describe('Multiplication', () => {
    test('Multiply two numbers', () => {
        // Given
        const a = 5;
        const b = 10;

        // When
        const result = multiply(a, b);

        // Then
        expect(result).toEqual(50);
    });

});