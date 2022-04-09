<script>
	import { types } from '$lib/sensorTypes';
	import IconWithText from './IconWithText.svelte';
	export let pickedCategory;
</script>

<select bind:value={pickedCategory}>
	{#each types as [name, icon]}
		<option value={name}>
			{name}
		</option>
	{/each}
</select>

<style>
	select {
		display: block;
		width: 17vw;
		font-size: 1rem;
		padding: 0.5rem;
		margin: 20px auto;
		border: 2px solid #e900ff;
		background-color: black;
		color: white;
		border-radius: 15px;
	}
</style>
