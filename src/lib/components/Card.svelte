<script>
  import {foodList} from "../data.js";
</script>


<section class="gallery-recipe">
	<h2 class="title">Recipe</h2>
	<ul>
		{#each foodList as { href, name, description, pic, attribute}}
		<div class="cards">
			<a {href}>
				<header><h2>{name}</h2></header>
		<img src={pic} alt={attribute}>
		<p>
			{description}
		 </p>
		</a>
		</div>

		{/each}
</ul>
</section>