<script>
	import SensorStore from '$lib/stores/SensorStore';
	import ListItem from '$lib/components/ListItem.svelte';
	import Search from 'svelte-search';
	import Switch from '$lib/components/Switch.svelte';
	import Map from '$lib/components/Map.svelte';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
	import CategoryPicker from '$lib/components/CategoryPicker.svelte';

	let sliderValue;
	let pickedCategory;
	let value = '';

	const filterSensors = (sensors, text, pickedCategory) => {
		let result = sensors;
		result = result.filter(({ name }) => name.toLowerCase().includes(text.toLowerCase()));
		result = result.filter(({ category }) => category === pickedCategory);
		return result;
	};
	$: filteredSensors = filterSensors($SensorStore, value, pickedCategory);
</script>

<header>
	<div>
		<Search bind:value placeholder="Name..." label="Search by name" />
		<CategoryPicker bind:pickedCategory />
	</div>
	<div>
		<Switch bind:value={sliderValue} label="Map" fontSize={24} />
		<p>
			<!--Switch is {sliderValue} -->
		</p>
	</div>

	{#if sliderValue === 'on'}
		<div transition:fade={{ duration: 200, delay: 400 }}>
			<Map sensors={filteredSensors} />
		</div>
	{:else}
		{#if value}
			<button on:click={() => (value = '')}>Clear "{value}"</button>
		{/if}
		<ol>
			{#each filteredSensors as { id, name, category, icon_name, city }, i (id)}
				<li animate:flip={{ duration: 400 }} transition:fade={{ duration: 200 }}>
					<ListItem {name} {category} {icon_name} path={`/sensors/${id}`} {city} />
				</li>
			{/each}
		</ol>
	{/if}
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
