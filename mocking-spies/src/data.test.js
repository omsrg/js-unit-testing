import { it, expect, describe, vi } from 'vitest';

import { generateReportData } from './data';

describe('generateReportData()', () => {
	it('should excute logFn if provided', () => {
		const logger = vi.fn();

		generateReportData(logger);

		expect(logger).toBeCalled();
	});
});
