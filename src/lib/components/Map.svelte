<div class="content">
	<img class="darker-span" src="/static/map.jpg" alt="TownMap" />
	<div class="overlay" id="circle" />
</div>

<style>
	.content {
		position: relative;
		z-index: 1;
	}

	.overlay {
		opacity: 1;
		color: black;
		/*filter: alpha(opacity=0);*/
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
		width: 100px;
		height: 100px;
		background: red;
		border-radius: 50%;
	}
</style>
