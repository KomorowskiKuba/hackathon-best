<script>
	import Chart from 'svelte-frappe-charts';

	let data = {
		labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
		datasets: [
			{
				values: [10, 12, 3, 9, 8, 15, 9]
			}
		]
	};
</script>

<Chart {data} type="line" colors={['#e20de9']} lineOptions={{ regionFill: 1, hideDots: 1 }} />
