<script>
	import SensorStore from '$lib/stores/SensorStore';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
	import { user } from '$lib/stores/auth';
	import Icon from '$lib/components/Icon.svelte';
	$: sensors = $SensorStore.filter((sensor) => sensor.author.includes($user));
</script>

<header>
	<h2>Hello {$user}</h2>
	<h4>Your sensors:</h4>
	<a href="/add-sensor">
		<b> Add new sensor </b>
	</a>
	<ol>
		{#each sensors as { id, name, category, icon_name, city }, i (id)}
			<li animate:flip={{ duration: 400 }} transition:fade={{ duration: 200 }}>
				<div
					style="display:flex; flex-direction: row; justify-content: flex-start; align-items: center; text-align: left;"
				>
					<a href={`/sensors/${id}`}>
						<span class="material-icons" style="font-size: 75px; margin-right: 15px; color: white;">
							{icon_name}
						</span>
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
					<p>
						<button><Icon name="settings" /></button>
					</p>
					<p>
						<button><Icon name="delete" /></button>
					</p>
				</div>
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
