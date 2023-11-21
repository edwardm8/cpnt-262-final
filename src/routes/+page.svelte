<script>
import dayjs from 'dayjs'


let now = dayjs().format('MMM D, YYYY')
const oldDate = dayjs('2024-01-01')

const diffDate = oldDate.diff(now, 'day')

</script>

<style>
  .hero{
    background-image: url('hero.png');
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 
  }
</style>

<section class="hero flex m-auto justify-center items-center">
  <div class="max-w-xl m-auto flex flex-col items-center gap-4">
    <h1 class="h1">Christmas Special</h1>
    <p>25% off any menu item! Limited time offer:</p>
    <h2 class="h2">{diffDate} days left</h2>
    <button type="button" class="btn variant-filled">Order</button>
  </div>
</section>

