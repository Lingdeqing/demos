<script>
import {onMount} from "svelte";
let data = [];
export let url = 'https://academy.valentinog.com/api/link/';
onMount(async function(){
    const res = await fetch(url);
    const json = await res.json();
    data = json;
})
</script>
<slot {data}/>