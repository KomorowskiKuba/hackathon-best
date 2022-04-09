<script>
	import { types } from '$lib/sensorTypes';
	import IconWithText from './IconWithText.svelte';
	export let pickedCategory;
</script>

<select bind:value={pickedCategory}>
	{#each types as [name, icon]}
		<option value={name}>
			<IconWithText name={icon}>
				{name}
			</IconWithText>
		</option>
	{/each}
</select>
