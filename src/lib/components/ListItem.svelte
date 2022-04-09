<script>
	import Icon from '$lib/components/Icon.svelte';

	export let name = '';
	export let category = '';
	export let icon_name = '';
	export let path = '';
	export let city = '';
</script>

<div
	style="display:flex; flex-direction: row; justify-content: flex-start; align-items: center; text-align: left;"
>
	<a href={path}>
		<span class="material-icons" style="font-size: 75px; margin-right: 15px; color: white;"
			>{icon_name}</span
		>
	</a>
	&nbsp;
	<p>
		Sensor: {name}
	</p>
	<p>
		Category: {category}
	</p>
	<p>
		City: {city}
	</p>
</div>
