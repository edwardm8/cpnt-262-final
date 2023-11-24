<script>
  import '../../app.css'
</script>
<div class="cards">
  <slot />
</div>

<style>
.cards{
  background-color:rgb(104 11 29);
  text-align: center;
  border-radius: 5%;
  max-width: 50ch;
  transition: ease-in-out 0.2s;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.cards:hover {
  scale: 115%;
  background-color: #000;
}
</style>