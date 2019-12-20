<script>
	import Form from "./Form.svelte"
	import Fetch from "./Fetch.svelte"

	let searchTerm;
	function handleSubmit(){
		searchTerm = this.elements.search.value;
	}
</script>

<main>
	<Form {handleSubmit}/>
	<Fetch {searchTerm} let:data>
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