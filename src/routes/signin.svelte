<script>
	import IconWithText from '$lib/components/IconWithText.svelte';
	import { goto } from '$app/navigation';
	import { user } from '$lib/stores/auth';
	const login = (e) => {
		e.preventDefault();
		$user = 'Jakub Smolaga';
		goto('my-sensors');
	};
</script>

<section id="ideas">
	<form style="text-align: center;" on:submit={login}>
		<header style="padding-bottom: 0rem; padding-top: 0;">
			<h2>Sign in</h2>
		</header>

		<IconWithText name="account_circle">
			&nbsp;
			<input class="dark-input" type="email" placeholder="E-mail address" size="28" />
		</IconWithText>
		<IconWithText name="lock">
			&nbsp;
			<input class="dark-input" type="password" placeholder="Password" size="28" />
		</IconWithText>
		<br />
		<button type="submit">Sign In</button>
		<p>Or <a href="/signup">Sign Up</a> and create a new account</p>
	</form>
</section>

<style>
	input {
		margin-bottom: 0;
	}
</style>
