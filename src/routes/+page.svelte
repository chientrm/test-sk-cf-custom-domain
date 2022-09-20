<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<h1>Welcome to SvelteKit</h1>
<button on:click={invalidateAll}>Invalidate</button>
<p>Value: {data.value}</p>
