<script>
	import { fade } from 'svelte/transition';
	import RenderOnMount from './RenderOnMount.svelte';

	export let url;
</script>

<RenderOnMount>
	{#key url}
		<main in:fade={{ duration: 500, delay: 500 }} out:fade={{ duration: 500 }}>
			<slot />
		</main>
	{/key}
</RenderOnMount>
