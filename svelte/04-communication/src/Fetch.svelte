<script>
import {onMount} from "svelte";
export let url = 'https://academy.valentinog.com/api/link/';
export let searchTerm = undefined;
let jsonRes = [];
$: regex = new RegExp(searchTerm, 'gi');
$: data = searchTerm ? jsonRes.filter(item => item.title.match(regex)) : jsonRes;
onMount(async function(){
    const res = await fetch(url);
    jsonRes = await res.json();
})
</script>
<slot {data}/>