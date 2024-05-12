<script lang="ts">
	import type { LayoutData } from "../$types";


	export let data: LayoutData

</script>
<main>
	<aside class="cat">
		<nav>
			<div class="category">
				<h1>Top post</h1>
				<!-- <ul>
					<li><a href="#one" class="contrast">One</a></li>
					<li><a href="#two" class="contrast">Two</a></li>
					<li><a href="#three" class="contrast">Three</a></li>
				</ul> -->
				<ul>
					{#each data.post as {title,id} }
					<li><a href="/blog/{id}">{title}</a></li>
						
					{/each}
				</ul>
			</div>
			<!-- <div class="category">
        <h1>Quick Links</h1>    
        <ul>
            <li><a href="#one">One</a></li>
            <li><a href="#two">Two</a></li>
            <li><a href="#three">Three</a></li>
        </ul>
        </div> -->
			<!-- <div class="category">
				<h1>Arivals</h1>
				<ul>
					<li><a href="#oldest">Oldest</a></li>
					<li><a href="#Newest">Newest</a></li>
					<li><a href="#Popular">Popular</a></li>
				</ul>
			</div> -->
		</nav>
	</aside>
	<aside>
		<slot />
	</aside>
</main>

<style>
	main {
		padding-top: 2rem;
		display: grid;
		grid-template-columns:300px minmax(auto,80ch);
	}
	.category {
		padding: 2rem 0rem;
	}
	@media screen and (max-width:771px){
		.cat{
			display: none;
		}
	}
</style>
