<script>
  import {foodList} from "../data.js";
</script>


<section class="gallery-recipe">
	<h2 class="title">List Of Foods</h2>
	<ul>
		{#each foodList as { href, name, description, pic, attribute}}
		<div class="cards">
			<a {href}>
				<header><h2>{name}</h2></header>
		<img src={pic} alt={attribute}>
		</a>
		</div>

		{/each}
</ul>
</section>
<style>


h2 {
  text-align: center;
  padding-top: 2rem;
  font-size: 2.5rem;
}

img {
  display: flex;
  overflow: hidden;
  max-width:25ch;
  border-radius: 2rem;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
}


.cards{
  background-color:rgb(104 11 29);
  text-align: center;
  border-radius: 5%;
  max-width: 50ch;
  transition: ease-in-out 0.2s;
  margin-top: 2rem;
  margin-bottom: 10rem;
}

.cards:hover {
  scale: 115%;
  background-color: #000;
}

.cards:hover h2 {
  color:aliceblue
}

.title {
  padding-bottom: 2rem;
}


ul {
    overflow: hidden;
    display: grid;
    grid-gap: 5rem;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    margin: 2rem;
}


a {
  text-decoration: none;
  color: black;
  max-width: max-content;
}

</style>