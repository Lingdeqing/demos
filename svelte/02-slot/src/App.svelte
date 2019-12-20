<script>
	import Fetch from "./Fetch.svelte"
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<Fetch url="https://jsonplaceholder.typicode.com/todos" let:data>
		<h2>列表</h2>
		<ul>
		{#each data as link}
		<li>
		<a href={link.url}>{link.title}</a>
		</li>
		{/each}
		</ul>
	</Fetch>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>