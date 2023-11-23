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


.cards{
  background-color:rgb(104 11 29);
  text-align: center;
  border-radius: 5%;
  max-width: 50ch;
  transition: ease-in-out 0.2s;
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 10rem;
}

.cards:hover {
  scale: 115%;
  background-color: #000;
}


 </style>
