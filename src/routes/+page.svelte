<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	let refreshing = false;
	const refresh = async () => {
		refreshing = true;
		await invalidateAll();
		refreshing = false;
	};
</script>

<h1>Welcome to SvelteKit</h1>
<span>Refreshing: {refreshing}</span>
<button on:click={refresh}>Invalidate</button>
<p>Value: {data.value}</p>
