<script>
  import Gallery from '../../lib/components/gallery.svelte';
  import {foodList} from "$lib/data.js";
</script>

{#each foodList as {link,name,pic,attribute}}
  <Gallery>
    <a href={link}>
      <header><h2>{name}</h2></header>
      <img src={pic} alt={attribute}>
    </a>
  </Gallery>
{/each}


