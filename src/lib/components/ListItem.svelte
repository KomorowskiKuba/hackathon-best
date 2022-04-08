<script>
	export let name = '';
	export let type = '';
	export let img_path = '';
	export let path = '';
</script>

<div
	style="display:flex; flex-direction: row; justify-content: flex-start; align-items: center; text-align: left;"
>
	<a href={path}>
		<img src={img_path} alt="sensor-type" height="25%" width="25%" />
	</a>
	<p>
		Sensor: {name}
	</p>
	<p>
		Type: {type}
	</p>
</div>

<style>
	img {
		border-radius: 50%;
	}
</style>
