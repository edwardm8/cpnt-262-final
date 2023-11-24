<script>
  import Card from '$lib/components/gallery.svelte';
  
  export let data
  const { post } = data;
</script>

<svelte:head>
  <title>
    {post.name}
  </title>
</svelte:head>

<Card>
  <div class="cards">
    <a href={post.href}>
      <header><h2>{post.name}</h2></header>
  <img src={post.pic} alt={post.attribute}>
  <p>
    {post.description}
  </p>
  </a>
  </div>
</Card> 

<style>


h2 {
  text-align: center;
  padding: 2rem;
  font-size: 2.5rem;
  color: white;
}

p {
  padding: 2rem;
}

 </style>
