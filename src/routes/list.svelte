<script>
	import ListItem from '$lib/components/ListItem.svelte';
	import Search from 'svelte-search';

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
			name: "Jake's sensor #1",
			type: 'Smog',
			img_path: 'temperature.png',
			path: '/'
		},
		{
			name: "Jake's sensor #2",
			type: 'Temperature',
			img_path: 'temperature.png',
			path: '/'
		}
	];
</script>

<header>
	<div>
		<Search bind:value placeholder="Name..." label="Search by name" />
	</div>

	{#if value}
		<button on:click={() => (value = '')}>Clear "{value}"</button>
	{/if}
	<ol>
		{#each sensors as { name, type, img_path }, i}
			{#if value === ''}
				<ListItem {name} {type} {img_path} path={'/sensors/' + (i + 1)} />
			{:else if name.toLowerCase().includes(value.toLowerCase())}
				<ListItem {name} {type} {img_path} path={'/sensors/' + (i + 1)} />
			{/if}
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
</style>
