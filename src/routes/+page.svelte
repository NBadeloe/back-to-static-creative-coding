<script>
  import GlitterCarousel from "../lib/components/GlitterCarousel.svelte";
import Glittercarousel from "../lib/components/GlitterCarousel.svelte";
  import Layout from "../lib/components/Layout.svelte";
  import Albums from "../lib/components/Albums.svelte";

</script>
<!-- <Layout/> -->
<!-- <GlitterCarousel/> -->
<!-- <Albums/> -->
<main>
  <nav>
    <a href="./layout">Layout</a>
    <a href="./glittercarousel">glitter carousel</a>
    <a href="./albums">Albums</a>
  </nav>
</main>

<style>
  main{
  @font-face {
    font-family: morganite;
    src: url(./fonts/Morganite-Black.ttf);
  }
  background-image: url(./assets/albums/bg.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #0253a5;
  margin: auto;
  padding: 1em;
  width: 98vw;
  height: 46vw;
  }

  nav{
    display: grid;
    justify-self: center;
    margin: 6vw;
  }

  a{
    justify-self:center;
    justify-content: center;
    margin: 0.5em;
    color: #00ff7f;
    font-family: morganite;
    font-size: 5em;
    text-decoration: none;
  }

  a:hover {
    color: #7efbbc;
  }
</style>