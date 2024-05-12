<script lang="ts">
	import type { PageData } from '../$types';
    import SvelteMarkdown from 'svelte-markdown'


	export let data: PageData;
    let {content, title,createdAt} = data


	function formatData(data:Date){
		return new 	Intl.DateTimeFormat('en',{dateStyle:"long"}).format(data)

	}

	// console.log(data)
</script>

<h1 class="pico-color-azure-500">
	{title}
</h1>
<h6 class="disbled">Created at {formatData(createdAt)}</h6>
<br><br><br>

<SvelteMarkdown source={content} />


<!-- <p>
	{content.replaceAll(`|||`,'\n')}
</p> -->

