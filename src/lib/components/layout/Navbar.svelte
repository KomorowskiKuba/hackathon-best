<script>
	import { user } from '$lib/stores/auth';
</script>

<header>
	<nav style="margin-bottom: 0;">
		<a href="/">
			<img src="/static/logo-text.png" alt="SensorTownLogo" height="30" />
		</a>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
			{#if !$user}
				<li>
					<a href="/signin"><b class="small">Sign In</b></a>
				</li>
				<li>
					<a href="/signup"><em class="small">Sign Up</em></a>
				</li>
			{:else}
				<li>
					Hello {$user}
					<ul>
						<li>
							<a href="/my-sensors">My profile</a>
						</li>
						<li>
							<button on:click={() => user.set(false)} class="small">Sign out</button>
						</li>
					</ul>
				</li>
			{/if}
		</ul>
	</nav>
</header>

<style>
	.small {
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}
	a {
		color: var(--color-text);
	}
</style>
