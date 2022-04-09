<script>
	import { onMount } from 'svelte';

	let componentMounted = false;

	onMount(() => {
		componentMounted = true;
	});
</script>

{#if componentMounted}
	<slot />
{/if}
