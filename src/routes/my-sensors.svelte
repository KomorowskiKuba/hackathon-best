<script>
	import SensorStore from '$lib/stores/SensorStore';
	import ListItem from '$lib/components/ListItem.svelte';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';

	export let sensors = [];
	SensorStore.subscribe((data) => {
		sensors = data;
	});

    let username = "Radosław";
    sensors = sensors.filter((sensor) =>
        sensor.author.includes(username)
    );
</script>

<header>
	<ol>
		{#each sensors as { id, name, category, icon_name, city }, i (id)}
			<li animate:flip={{ duration: 400 }} transition:fade={{ duration: 200 }}>
				<ListItem {name} {category} {icon_name} path={`/sensors/${id}`} {city} />
			</li>
		{/each}
	</ol>
</header>
<style>
	ol {
		counter-reset: li;
		list-style: none;
		*list-style: decimal;
		padding: 0;
		margin-bottom: 4em;
		text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
	}

	:global([data-svelte-search] input) {
		display: block;
		width: 100vw;
		font-size: 1rem;
		padding: 0.5rem;
		margin: 0 auto;
		border: 2px solid #e900ff;
		background-color: black;
		color: white;
		border-radius: 15px;
	}

	li {
		position: relative;
		display: block;
		padding: 0.4em 0.4em 0.4em 2em;
		*padding: 0.4em;
		margin: 0.5em 0;
		background: black;
		box-shadow: 5px 2px 20px #e900ff;
		color: white;
		border-radius: 15px;
		transition: all 0.3s ease-out;
	}
</style>
