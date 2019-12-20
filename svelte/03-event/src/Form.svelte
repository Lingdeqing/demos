<script>
function handleSubmit(){
    alert('提交成功')
}
</script>
<form on:submit|preventDefault={handleSubmit}>
<label>搜索:</label>
<input type="search" placeholder="输入关键字嗖嗖"/>
<button type="submit">搜索</button>
</form>