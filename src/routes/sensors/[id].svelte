<script>
	import Chart from '$lib/components/charts/Chart.svelte';
</script>

<section style="margin-top: -10rem;">
	<header>
		<h2>Sensor Data</h2>
	</header>
	<aside>
		<h3 style="display: flex; align-items: center;">
			<span class="material-icons" style="font-size: inherit;"> info </span>
			&nbsp;Information
		</h3>
		<ul>
			<li>Id: <a href="/">1e65aad3-55dc-4343</a></li>
			<li>Country: <a href="/">Poland</a></li>
			<li>City: <a href="/">Warsaw</a></li>
			<li>Category: <a href="/">Temperature</a></li>
			<li>Author: <a href="/">Jakub Smolaga</a></li>
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
