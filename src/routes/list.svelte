<script>
	import ListItem from '$lib/components/ListItem.svelte';
	import Search from 'svelte-search';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';

	let value = '';

	let sensors = [
		{
			name: "Mark's sensor #1",
			type: 'Smog',
			img_path: 'temperature.png',
			path: '/'
		},
		{
			name: "Mark's sensor #2",
			type: 'Temperature',
			img_path: 'temperature.png',
			path: '/'
		},
		{
			name: "Jakes's sensor #1",
			type: 'Smog',
			img_path: 'temperature.png',
			path: '/'
		},
		{
			name: "Jakes's sensor #2",
			type: 'Temperature',
			img_path: 'temperature.png',
			path: '/'
		}
	];

	$: filteredSensors = sensors.filter(({ name }) =>
		name.toLowerCase().includes(value.toLowerCase())
	);
</script>

<header>
	<div>
		<Search bind:value placeholder="Name..." label="Search by name" />
	</div>

	{#if value}
		<button on:click={() => (value = '')}>Clear "{value}"</button>
	{/if}
	<ol>
		{#each filteredSensors as { name, type, img_path }, i (name)}
			<li animate:flip={{ duration: 400 }} transition:fade={{ duration: 400 }}>
				<ListItem {name} {type} {img_path} path={'/sensors/' + (i + 1)} />
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

	div {
		width: 100%;
		display: grid;
		place-items: center;
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
