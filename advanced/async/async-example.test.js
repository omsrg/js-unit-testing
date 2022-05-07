import { it, expect } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

it('should generate a token value', (done) => {
	const testUserEmail = 'test@gmail.com';

	generateToken(testUserEmail, (err, token) => {
		try {
			expect(token).toBeDefined();
			// expect(token).toBe(2);
			done();
		} catch (err) {
			done(err);
		}
	});
});

it('should generate a token value', () => {
	const testUserEmail = 'test@gmail.com';

	return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

it('should generate a token value', async () => {
	const testUserEmail = 'test@gmail.com';

	const token = await generateTokenPromise(testUserEmail);

	expect(token).toBeDefined();
});
