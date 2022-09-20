import type { PageServerLoad } from './$types';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const load: PageServerLoad = async () => {
	await delay(3000);
	return {
		value: Math.random()
	};
};
