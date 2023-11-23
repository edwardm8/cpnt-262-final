<script>
  import Card from '$lib/components/Card.svelte';
  
  export let data
  const { post } = data;
</script>

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

 
