<script>
	import Card from '../lib/components/Card.svelte';
</script>

<header>
	<h1 style="font-size: 50px;">Build a better city <u> together </u> !</h1>
	<p>
		<b>Welcome in the place</b> where <u> we </u> <em>share</em> data. <br />
		SensorTown is a place where <u>everyone</u> can <b>access</b> and <b>share</b> data from
		<u>their own</u>
		sensors.
	</p>
	<br />
	<div class="parent">
		<div class="column">
			<Card text={"I've got a sensor!"} img_path={'sensors.jpg'} path={'/sensors-info'} />
		</div>
		<div class="column">
			<Card text={'Show me the data!'} img_path={'data.jpg'} path={'/data-info'} />
		</div>
	</div>
</header>

<style>
	.parent {
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.column {
		margin: 20px;
		flex: 1 1 0px;
		border: 3px solid black;
	}
</style>
