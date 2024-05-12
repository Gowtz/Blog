<script lang="ts">
    // const ssr=false;
    //     function toggleTheme() {
    //         const htmlElement = document.querySelector('html');
    //         const currentTheme = htmlElement?.getAttribute('data-theme');
            
    //         if (currentTheme === 'dark') {
    //             htmlElement?.setAttribute('data-theme', 'light');
    //         } else {
    //             htmlElement?.setAttribute('data-theme', 'dark');
    //         }
    //     }

    //     // Add event listener to the button
    //     document.getElementById('toggleThemeButton').addEventListener('click', toggleTheme);

</script>
<style>

    nav{
        align-items: center;
        padding: 1rem 1rem;
    }
    .mobile-view{
        display:none
    }
    @media screen and (max-width:771px){
		.desktop-view{
			display: none;
		}
        .mobile-view{
            display: block;
        }
	}

</style>




<header>
    <nav class="container ">
        <div class="logo"><h1>Logo</h1></div>
        <ul class="desktop-view">
            <li><a href="/" class="contrast">Home</a></li>
            <li><a href="/blog" class="contrast">Blog</a></li>
            <li><a href="/about" class="contrast">About</a></li>
            <li><a href="/contact" class="contrast">Contact</a></li>
            <li><a href="/post" class="contrast">Post</a></li>
            <li><button id="toggleThemeButton">Toggle</button></li>
        </ul>
        <ul class="mobile-view">
            <li><a href="/" class="contrast">Home</a></li>
            <li><a href="/blog" class="contrast">Blog</a></li>
            <li><a href="/post" class="contrast">Post</a></li>
        </ul>
    </nav>
</header>

<div class="container">
<slot />
</div>