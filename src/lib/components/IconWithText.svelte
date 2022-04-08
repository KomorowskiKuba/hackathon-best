<script>
	import Icon from './Icon.svelte';
	export let name;
</script>

<div>
	<Icon {name} />
	<slot />
</div>

<style>
	div {
		display: flex;
		align-items: center;
	}
</style>
