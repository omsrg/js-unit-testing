import { it, expect } from 'vitest';

import { validateNotEmpty } from './validation';

it('should throw an error if an empty string is provided as a value', () => {
	const testInput = '';

	const validationiFn = () => validateNotEmpty(testInput);

	expect(validationiFn).toThrow();
});

it('should throw an error with the provided error message', () => {
	const testInput = '';
	const testErrorMessage = 'test error message';

	const validateFn = () => validateNotEmpty(testInput, testErrorMessage);

	expect(validateFn).toThrow(testErrorMessage);
});
