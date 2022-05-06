import { it, expect } from 'vitest';

import { add } from './math';

it('should summarize all number values in an aray', () => {
	// Arrange
	const numbers = [1, 2, 4];

	// Act
	const result = add(numbers);

	// Assert
	const expectedResult = numbers.reduce((prevValue, curValue) => prevValue + curValue, 0);
	expect(result).toBe(expectedResult);
});

it('should yield NaN if a least one invalid number is provided', () => {
	const inputs = ['invalid', 1];

	const result = add(inputs);

	expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numberic string values is provided', () => {
	const inputs = ['2', '5'];

	const result = add(inputs);

	const expectedResult = inputs.reduce((prevValue, curValue) => +prevValue + +curValue, 0);
	expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array is provided', () => {
	const numbers = [];

	const result = add(numbers);

	expect(result).toBe(0);
});

it('should throw an error if no value is passed into the function', () => {
	const resultFn = () => {
		add();
	};
	expect(resultFn).toThrow();
});

it('should throw an error if provided with multiple arguments instead of an array', () => {
	const num1 = 2;
	const num2 = 4;

	const resultFn = () => {
		add(num1, num2);
	};

	expect(resultFn).toThrow();
});
