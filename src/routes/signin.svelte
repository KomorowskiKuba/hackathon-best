<script>
	import IconWithText from '$lib/components/IconWithText.svelte';
</script>

<section id="ideas">
	<form style="text-align: center;">
		<header style="padding-bottom: 0rem; padding-top: 0;">
			<h2>Sign in</h2>
		</header>

		<IconWithText name="account_circle">
			&nbsp;
			<input type="email" placeholder="E-mail address" size="28" style="margin-bottom: 0;" />
		</IconWithText>
		<IconWithText name="lock">
			&nbsp;
			<input type="password" placeholder="Password" size="28" />
		</IconWithText>
		<br />
		<button type="submit">Sign In</button>
		<p>Or <a href="/signup">Sign Up</a> and create a new account</p>
	</form>
</section>
