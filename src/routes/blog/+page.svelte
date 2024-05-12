<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>




<h1>Post</h1>

<p>Showing Post of {data.post.length}</p>

{#each data.post as {title,id} }
    <h3><a href="/blog/{id}">{title}</a></h3>
{/each}