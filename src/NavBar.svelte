<script lang="ts">
    import Quote from "./Quote.svelte";

    interface navLinkItem {
        key: string;
        value: string;
    }

    let navLinks: navLinkItem[] = [{key : 'About', value : '#about'}, {key : 'Skills', value :'#skills'}, {key: 'Projects', value : '#projects'}, {key : 'Contact', value :'#contact'}];

</script>

<nav>
    <h1>DAVID EJE</h1>
    <Quote />
    <ul class="navigation">
        {#each navLinks as navLink}
        <li><a href= {navLink.value} class="nav-link">{navLink.key}</a></li>
        {/each}
    </ul>
    <button class="burger-menu" id="burger-menu">
      <ion-icon class="bars" name="menu-outline"></ion-icon>
    </button>
</nav>