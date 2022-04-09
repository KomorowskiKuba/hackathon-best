<script>
	import SensorStore from '$lib/stores/SensorStore';
	import Chart from '$lib/components/charts/Chart.svelte';
	import { page } from '$app/stores';

	let pathname = $page.url.pathname
    let arr = pathname.split('/');
	let id = parseInt(arr[arr.length - 1]) - 1;

	export let sensors = [];
	SensorStore.subscribe((data) => {
		sensors = data;
	});

	let sensor = sensors[id];
</script>

<section style="margin-top: -4rem;">
	<header>
		<h2>Sensor Data</h2>
	</header>
	<aside>
		<h3 style="display: flex; align-items: center;">
			<span class="material-icons" style="font-size: inherit;"> info </span>
			&nbsp;Information
		</h3>
		<ul>
			<li>Id: <a href="/">{id}</a></li>
			<li>Name: <a href="/">{sensor.name}</a></li>
			<li>Country: <a href="/">{sensor.country}</a></li>
			<li>City: <a href="/">{sensor.city}</a></li>
			<li>Category: <a href="/">{sensor.category}</a></li>
			<li>Author: <a href="/">{sensor.author}</a></li>
		</ul>
	</aside>
	<aside>
		<h3>
			<span class="material-icons" style="font-size: inherit;"> timeline </span>
			&nbsp;Display Options
		</h3>
		Span:
		<select name="time-span">
			<option>1h</option>
			<option>24h</option>
			<option>48h</option>
			<option>7d</option>
			<option>30d</option>
			<option>1 year</option>
		</select>
		Scale:
		<select>
			<option>Linear</option>
			<option>Logarithmic</option>
		</select>
	</aside>
	<aside>
		<h3>
			<span class="material-icons" style="font-size: inherit;"> star </span>
			Additional Options
		</h3>
		<a href="/" class="small-button">
			<em>
				<span class="material-icons"> file_download </span>
				Download CSV
			</em>
		</a>
		<br />
		<a href="/" class="small-button">
			<em>
				<span class="material-icons"> paid </span>
				Support the provider
			</em>
		</a>
	</aside>
</section>
<Chart />

<style>
	.small-button em {
		padding: 0.4rem;
		display: flex;
		align-items: center;
	}
</style>
