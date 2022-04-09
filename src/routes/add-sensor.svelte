<script>
	import SensorTypeTile from '$lib/components/SensorTypeTile.svelte';
	import IconWithText from '$lib/components/IconWithText.svelte';
	import SensorStore from '$lib/stores/SensorStore';
	import { goto } from '$app/navigation';

	let types = {
		Temperature: 'thermostat',
		'Air quality': 'air',
		Noise: 'volume_up',
		Humidity: 'water_drop',
		'Rain meter': 'opacity',
		'UV radiation': 'light_mode',
		'Wind speed': 'wind_power',
		'Soil moisture': 'terrain'
	};

	let icon_names = [
		'thermostat',
		'air',
		'volume_up',
		'water_drop',
		'opacity',
		'light_mode',
		'wind_power',
		'terrain'
	];

	let category = '';
	let name = '';
	let country = '';
	let city = '';
	let author = '';

	function hash(x) {
		var hash = 0,
			i,
			chr;
		if (x.length === 0) return hash;
		for (i = 0; i < x.length; i++) {
			chr = x.charCodeAt(i);
			hash = (hash << 5) - hash + chr;
			hash |= 0;
		}

		return hash;
	}

	export let sensors = [];
	SensorStore.subscribe((data) => {
		sensors = data;
	});

	const handleSubmit = () => {
		let h = hash(category);
		let id = sensors.length;
		let new_sensor = {
			id: id,
			name: name,
			category: category,
			country: country,
			city: city,
			author: author,
			icon_name: types[category],
			path: '/sensors/' + id
		};

		SensorStore.set([...sensors, new_sensor]);

		goto('/sensor-api/' + h);
	};
</script>

<header>
	{#if category === ''}
		<h2>Select your sensor's type</h2>
		<div class="row">
			{#each Array.from(Array(4).keys()).slice(0) as i}
				<div class="column">
					<SensorTypeTile
						icon_name={Object.values(types)[i]}
						text={Object.keys(types)[i]}
						fun={Object.keys(types)[i]}
						bind:type={category}
					/>
				</div>
			{/each}
		</div>
		<div class="row">
			{#each Array.from(Array(8).keys()).slice(4) as i}
				<div class="column">
					<SensorTypeTile
						icon_name={Object.values(types)[i]}
						text={Object.keys(types)[i]}
						fun={Object.keys(types)[i]}
						bind:type={category}
					/>
				</div>
			{/each}
		</div>
	{:else}
		<form style="text-align: center;" on:submit|preventDefault={handleSubmit}>
			<header style="padding-bottom: 0rem; padding-top: 0;">
				<h2>{category + ' sensor'}</h2>
			</header>

			<IconWithText name="looks_one">
				&nbsp;
				<input
					class="dark-input"
					type="text"
					placeholder="Sensor's name"
					size="28"
					bind:value={name}
				/>
			</IconWithText>
			<IconWithText name="location_on">
				&nbsp;
				<input
					class="dark-input"
					type="text"
					placeholder="Country"
					size="28"
					bind:value={country}
				/>
			</IconWithText>
			<IconWithText name="location_on">
				&nbsp;
				<input class="dark-input" type="text" placeholder="City" size="28" bind:value={city} />
			</IconWithText>
			<br />
			<button type="submit">Add sensor</button>
		</form>
	{/if}
</header>

<style>
	form {
		display: inline-block;
	}
	.row {
		display: flex;
	}

	.column {
		flex: 100%;
		padding: 5px;
	}
</style>
