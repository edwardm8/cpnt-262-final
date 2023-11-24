<script>
  import Gallery from '../../lib/components/gallery.svelte';
  import {foodList} from "$lib/data.js";
</script>

<style>
  
  h2 {
  text-align: center;
  padding-top: 2rem;
  font-size: 2.5rem;
  color: white;
  }
  

  a {
    text-decoration: none;
    color: black;
    max-width: max-content;
  }

  img {
    margin: auto;
    margin-top: 2rem;
    border-radius: 5%;
    height: 50%;
  }
 
  ul {
  overflow: hidden;
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  }

  p {
    color: white;
    padding: 2rem;
  }


</style>

<svelte:head>
  <title>
    Our Current Menu
  </title>
</svelte:head>
  <ul>
    {#each foodList as {href,name,pic,attribute,id,flavourText}}
      <Gallery>
        <a href="{href}{id}">
          <header><h2>{name}</h2></header>
          <img src={pic} alt={attribute}>
          <p>
            {flavourText}
          </p>
        </a>
      </Gallery>
    {/each}
  </ul>




