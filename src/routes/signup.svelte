<script>
	import IconWithText from '$lib/components/IconWithText.svelte';
</script>

<section id="ideas">
	<form style="text-align: center;">
		<header style="padding-bottom: 0rem; padding-top: 0;">
			<h2>Sign Up</h2>
		</header>

		<IconWithText name="account_circle">
			&nbsp;
			<input class="dark-input" type="email" placeholder="E-mail address" size="28" />
		</IconWithText>
		<IconWithText name="badge">
			&nbsp;
			<input class="dark-input" type="text" placeholder="First name" size="28" />
		</IconWithText>
		<IconWithText name="badge">
			&nbsp;
			<input class="dark-input" type="text" placeholder="Last name" size="28" />
		</IconWithText>
		<IconWithText name="lock">
			&nbsp;
			<input class="dark-input" type="password" placeholder="Password" size="28" />
		</IconWithText>
		<IconWithText name="lock">
			&nbsp;
			<input class="dark-input" type="password" placeholder="Repeat password" size="28" />
		</IconWithText>
		<br />
		<button type="submit">Sign Up</button>
		<p>Or <a href="/signin">Sign In</a> to an existing account</p>
	</form>
</section>

<style>
	input {
		margin-bottom: 0;
	}
</style>
