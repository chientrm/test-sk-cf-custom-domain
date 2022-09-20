import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
	value: Math.random()
});
