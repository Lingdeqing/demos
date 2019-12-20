<script>
import {onMount} from "svelte";
let data = [];
export let url = 'https://academy.valentinog.com/api/link/';
export let title = '一组链接';
onMount(async function(){
    const res = await fetch(url);
    const json = await res.json();
    data = json;
})
</script>
<h2>{title}</h2>
<ul>
{#each data as link}
<li>
<a href={link.url}>{link.title}</a>
</li>
{/each}
</ul>