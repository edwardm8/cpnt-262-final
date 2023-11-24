<script>
import Info from "$lib/components/info.svelte"
import "../../app.css"
const infoFamily = 
  {
    title:'Family First', 
    description:"We have host exclusive events, themed nights, or chef's specials to keep the dining experience fresh and exciting.The moment you step into the Everyday Pub, you are greeted by an atmosphere of elegance and refinement. For an extra touch of sophistication, the restaurant may feature a chef's table or an open kitchen concept. At our Family Restaurant, we understand the importance of quality time spent together. Our attentive staff is dedicated to ensuring your dining experience is not just a meal but a shared moment of joy. We provide high chairs and booster seats for our younger guests, and our kid-friendly menu is designed to please even the pickiest eaters. To enhance your family time, we offer entertainment options for all ages. From engaging activities for the kids to occasional live performances, we create an environment where everyone can relax and have fun.", 
    cardImg:'../../images/family.jpg'
  }
const infoAward =
  {
    title:'Award Wining Family Resturaunt', 
    description:"Voted best in town 5 years in a row. The menu at the best restaurant in town is a masterpiece in itself, showcasing a culinary journey crafted by skilled chefs. Our service is characterized by impeccable attention to detail. Most of our tables are reserved all year around. You may have to book very far in advance.",
    cardImg:'../../images/chef.jpeg'
  }

</script>

<svelte:head>
  <title>
    About Us
  </title>
</svelte:head>

<h1 class="text-center h1 p-4 bg-primary-800">About Us</h1>

<Info {...infoAward} />

<section class="flex justify-center bg-primary-800 p-4">
  <img class="max-w-sm p-4" src="../../images/award1.png" alt="">
  <img class="max-w-sm p-4" src="../../images/award2.png" alt="">
  <img class="max-w-sm p-4" src="../../images/award3.png" alt="">
  <img class="max-w-sm p-4" src="../../images/award4.png" alt="">
</section>

<Info {...infoFamily} />
