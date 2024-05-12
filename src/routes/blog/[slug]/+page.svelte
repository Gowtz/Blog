<script lang="ts">
	import type { PageData } from '../$types';
    import SvelteMarkdown from 'svelte-markdown'


	export let data: PageData;
    let {content, title} = data

	// console.log(data)
</script>

<h1 class="pico-color-azure-500">
	{title}
</h1>

<SvelteMarkdown source={content} />


<!-- <p>
	{content.replaceAll(`|||`,'\n')}
</p> -->

