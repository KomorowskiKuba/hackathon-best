<script>
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	export let sensors;
</script>

<div class="content">
	<div
		class="darker-span"
		style="background-image: url(map.jpg); background-size: cover; width: 1048px; height: 900px"
	/>
	{#each sensors as sensor}
		<div
			on:click={() => goto(`/sensors/${sensor.id}`)}
			data-tooltip={sensor.name}
			class="overlay"
			id="circle"
			style={`left: ${sensor.x}px; top: ${sensor.y}px;`}
			transition:fade
		/>
	{/each}
</div>

<svelte:head>
	<style>
		/*This would all go into the global.css file*/
		[data-tooltip] {
			position: relative;
			z-index: 2;
			display: block;
		}

		[data-tooltip]:before,
		[data-tooltip]:after {
			visibility: hidden;
			opacity: 0;
			pointer-events: none;
			transition: 0.2s ease-out;
			transform: translate(-50%, 5px);
		}

		[data-tooltip]:before {
			position: absolute;
			bottom: 100%;
			left: 50%;
			margin-bottom: 5px;
			padding: 7px;
			width: 100%;
			min-width: 70px;
			max-width: 250px;
			-webkit-border-radius: 3px;
			-moz-border-radius: 3px;
			border-radius: 3px;
			background-color: #000;
			background-color: hsla(0, 0%, 20%, 0.9);
			color: #fff;
			content: attr(data-tooltip);
			text-align: center;
			font-size: 14px;
			line-height: 1.2;
			transition: 0.2s ease-out;
		}

		[data-tooltip]:after {
			position: absolute;
			bottom: 100%;
			left: 50%;
			width: 0;
			border-top: 5px solid #000;
			border-top: 5px solid hsla(0, 0%, 20%, 0.9);
			border-right: 5px solid transparent;
			border-left: 5px solid transparent;
			content: ' ';
			font-size: 0;
			line-height: 0;
		}

		[data-tooltip]:hover:before,
		[data-tooltip]:hover:after {
			visibility: visible;
			opacity: 1;
			transform: translate(-50%, 0);
		}
		[data-tooltip='false']:hover:before,
		[data-tooltip='false']:hover:after {
			visibility: hidden;
			opacity: 0;
		}
	</style>
</svelte:head>

<style>
	.content {
		position: relative;
		z-index: 1;
	}

	.overlay {
		opacity: 1;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: block;
		z-index: 2;
		background: transparent;
	}

	.darker-span {
		filter: brightness(50%);
	}

	#circle {
		display: absolute;
		width: 10px;
		height: 10px;
		background: #e20de9;
		box-shadow: 0px 0px 30px 10px #e20de9;
		border-radius: 50%;
		cursor: pointer;
	}
</style>
