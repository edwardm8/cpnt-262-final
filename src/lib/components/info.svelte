<script>
  export let title= 'test'
  export let description = 'test'
  export let cardImg= '../../images/bacon.png'
  export let alt= 'test'
</script>


<section class="flex m-auto max-w-fit items-center p-4">
  <img class="max-w-xl"src={cardImg} alt={alt}>
  <div class="text max-w-2xl">
    <h2 class="h2 p-4">{title}</h2>
    <p class="p-4">{description}</p>
  </div>
</section>