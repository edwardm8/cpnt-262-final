<script>
  import '../../app.css';
  import Card from '../../lib/components/Card.svelte';
  import {foodList} from "$lib/data.js";
</script>

{#each foodList as { href, name, description, pic, attribute}}
  <Card>
		<div class="cards">
			<a {href}>
				<header><h2>{name}</h2></header>
		<img src={pic} alt={attribute}>
		<p>
			{description}
		 </p>
		</a>
		</div>
  </Card>
{/each}

