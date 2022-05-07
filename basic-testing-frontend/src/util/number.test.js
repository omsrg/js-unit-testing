import { it, expect, describe } from 'vitest';

import { cleanNumber, transformToNumber } from './numbers';

describe('transformToNumber()', () => {
	it('should transform a string number to a number of type number', () => {
		const input = '1';

		const result = transformToNumber(input);

		expect(result).toBeTypeOf('number');
	});

	it('should transform a string number to a number of type number', () => {
		const input = '1';

		const result = transformToNumber(input);

		expect(result).toBe(+input);
	});

	it('should yield NaN for non-transformable values', () => {
		const input = 'invalid';
		const input2 = {};

		const result = transformToNumber(input);
		const result2 = transformToNumber(input2);

		expect(result).toBeNaN();
		expect(result2).toBeNaN();
	});
});

describe('cleanNumber()', () => {
	it('should return an array of number values if an array of string number values is provided', () => {
		const numberValues = ['1', '2'];

		const result = cleanNumber(numberValues);

		// expect(result).toBeTypeOf('number');
		expect(result).toEqual([1, 2]);
	});

	it('should throw an error if an array with at least one empty string is provided', () => {
		const numberValues = ['', 1];

		const cleanFn = () => cleanNumber(numberValues);

		expect(cleanFn).toThrow();
	});
});
