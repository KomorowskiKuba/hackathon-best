<script context="module">
	export const load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
	import '$lib/mvp.css';
	import '$lib/global.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import Footer from '$lib/components/Footer.svelte';
	export let url = '';
</script>

<Navbar />
<PageTransition {url}>
	<slot />
</PageTransition>
<br />
<br />
<br />
<br />
<br />
<Footer />
