

<div class="cards">
  <slot />
</div>

<style>


h2 {
  text-align: center;
  padding-top: 2rem;
  font-size: 2.5rem;
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

a {
  text-decoration: none;
  color: black;
  max-width: max-content;
}

ul {
  overflow: hidden;
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
}

img {
  margin: auto;
  margin-top: 2rem;
  border-radius: 5%;
  

}


</style>