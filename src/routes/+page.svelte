<script>
  import * as prismicH from "@prismicio/helpers";
  export let data;
</script>

<main>
  <h1>My favorite Albums</h1>
  <section class="album-grid">
    <!-- loop door alle data types en render het -->
    {#each data.document as data}
      <section class="album-card">
        <section class="album-img">
          <img
            src={prismicH.asImageSrc(data.data.album_img)}
            alt={data.data.album_img.alt}
          />
          <section class="album-list">
            <ol>
              {@html prismicH.asHTML(data.data.tracklist)}
            </ol>
          </section>
        </section>
        <section class="album-text">
          <h2>{@html prismicH.asText(data.data.album_name)}</h2>
          <h3>{@html prismicH.asText(data.data.artist)}</h3>
        </section>
      </section>
    {/each}
  </section>
</main>

<style>
  @font-face {
    font-family: "Morganite-Black";
    src: url(/assets/fonts/Morganite-Black.woff);
  }

  @font-face {
    font-family: "Morganite-LightItalic";
    src: url(/assets/fonts/Morganite-LightItalic.woff);
  }

  @font-face {
    font-family: "Morganite-ThinItalic";
    src: url(/assets/fonts/Morganite-ThinItalic.woff);
  }
  main {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background-image: url(/assets/albums/bg.svg);
    background-color: black;
    background-repeat: no-repeat;
    background-size: cover;
  }
  h1 {
    font-family: Morganite-Black;
    margin: auto;
    text-align: center;
    font-size: 8em;
    color: #fff;
  }
  .album-grid {
    margin: auto;
    padding: 4em;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, 30em);
    grid-template-rows: repeat(3, 10em);
    gap: 5em;
  }

  .album-card {
    margin: auto;
    display: flex;
    flex-direction: row;
    width: 30em;
    height: 10em;
  }

  .album-card:nth-child(3n + 1) {
    background-color: #78d4b1;
    color: #40513b;
  }
  .album-card:nth-child(3n + 2) {
    background-color: #27ba83;
    color: #0f2626;
  }
  .album-card:nth-child(3n + 3) {
    color: #09fb3b;
    background-color: #466650;
  }

  .album-text {
    display: flex;
    flex-direction: column;
    margin: 1em;
    justify-self: left;
    text-align: left;
    margin-left: 1em;
  }

  h2 {
    font-family: Morganite-LightItalic;
    margin: 0;
    font-size: 3em;
    font-weight: 500;
  }
  h3 {
    font-family: Morganite-ThinItalic;
    margin: 0;
    font-size: 3em;
    font-weight: 400;
  }
  .album-img {
    position: relative;
    padding: 0em;
    width: 10em;
    height: 10em;
  }
  .album-img > img {
    width: 10em;
    height: 10em;
  }

  .album-img:hover .album-list {
    position: absolute;
    margin: 0;
    width: 10em;
    height: 10em;
    overflow-y: scroll;
    left: 0;
    top: 0;
    transition: opacity 0.5s ease, transform 2s cubic-bezier(0, 0, 0.44, 1.18);
    opacity: 1;
    z-index: 1;
    background-color: rgba(113, 113, 113, 0.941);
  }
  .album-list {
    opacity: 0;
  }
  .album-list::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f52f;
  }

  .album-list::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f52f;
  }

  .album-list::-webkit-scrollbar-thumb {
    background-color: #000000;
    border: 2px solid #555555;
  }

  ol {
    font-family: Arial, Helvetica, sans-serif;
    font-size: small;
  }
</style>
