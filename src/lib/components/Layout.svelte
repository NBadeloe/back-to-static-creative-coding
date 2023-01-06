<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "../../../node_modules/gsap/ScrollTrigger";
    import { MotionPathPlugin} from "../../../node_modules/gsap/MotionPathPlugin"
    import { onMount } from "svelte";
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MotionPathPlugin);

    //switch later to article movement
onMount(() => {
    gsap.to(".header-img", {

			xPercent: -40,
			ease: "none",
          
			scrollTrigger: {
				trigger: ".header-img",
				start: "top 50%",
				end: "bottom top",
				scrub: true,
                  motionPath : {
                path : [{ x: 800, y: 200 },
                        { x: 900, y: 20 },
                        { x: 1100, y: 100 },]
            },
            markers : true
        }
 
    });
})

gsap.to(".header-p", {

xPercent: -40,
ease: "none",

scrollTrigger: {
    trigger: ".header-img",
    start: "top 50%",
    end: "bottom top",
    scrub: true,
      motionPath : {
    path : [{ x: 800, y: 200 },
            { x: 900, y: 20 },
            { x: 1100, y: 100 },]
},
markers : true
}

});


gsap.timeline(
    {scrollTrigger: {
     trigger: "#track",
     start: 0,
     end: '+=300%+=50px',
     // end: '+=' + ((window.innerHeight * 3) + 50),
     scrub: true,
     markers: true
    }}
        )

onMount(() => {
    gsap.to(".header-text", {
        xPercent: 40,
			ease: "none",
			scrollTrigger: {
				trigger: ".header-img",
				pin:".mainhero",
				start: "top 50%",
				end: "bottom top",
				scrub: true,
            markers : true
        }
    });

})
    

</script>




<html lang="en">
    <body>
    <section class="header">
        <h1 class="header-text">PARIS IS BURNING</h1>
        <img class="header-img" src="./assets/paris-is-burning.jpg" alt="">
        <p class="header-p">Paris Is Burning, the eternally influential documentary by Jennie Livingston that captured New York's '80s ballroom community and taught us about voguing, reading for filth, and throwing well-cast shade, is back. This time, the film, which Livingston has restored, will premiere for a new generation of queerlings. Beginning on June 14 for a two-week run, the iconic film will rollout with viewings in nationwide theaters, as well.</p>
          </section>
          <q>The most notable slang in contemporary queer culture comes from historically marginalized Black and Brown femmes, many of whom have been active in the underground ballroom scene for years.</q>
    <article>
        <h2>Dorian Corey Dorian Corey</h2> 
        <p> Dorian was born in 1937 in Buffalo, New York. She started out a fashion designer and drag performer but later transformed into a star after leaving her hometown. In the 1950s Dorian was employed as a window dresser in a department store before she moved to New York to study arts.
        In the 1960s, she toured as a snake dancer in the Pearl Box Revenue. Dorian was among the four dancers who appeared in the Pearl Box Revenue in 1927. She took part in Wig stock and featured in a documentary film Paris is Burning. In August 1993, Dorian died of AIDS complications at Colombia Presbyterian Medical Center at the age of fifty-six years.</p>
        <img class="dorian-img" src=./assets/dorian-corey.webp alt="">
    </article>
    <article>
        <h2>Pepper LaBeija Pepper LaBeija</h2>
        <p>Pepper was born in the Bronx in November 1948. She also started out as a fashion designer and an American drag queen. Although Pepper was male, she identified herself as a female. Pepper took part in numerous drag balls, and she was well known for her Egyptian runway performances. Pepper won approximately two hundred and fifty trophies.
            Pepper featured in a documentary film Paris is Burning in 1990, she suffered diabetes mellitus type 2 where both of her legs were amputated. Pepper passed on in 2003.
        </p> 
    </article>
    <article>
        <h2>Willi Ninja Willi Ninja</h2>
        <p>William was born in New York in April 1961. He was a choreographer and a self-taught American dancer, William made his debut after appearing in the television series Paris is Burning. William was inspired by Haute Couture to develop unique styles of movements and dances. William worked hard to care for his mother who was sick but died of AIDS in September 2006 at the age of forty-six years.</p> 
     </article>
     <article>
        <h2>Anji Xtravaganza Angie Xtravaganza</h2>
        <p>Angie was born in New York in October 1964. Angie founded the Xtravaganza House. She was among the first transgender performers, a member of the gay ball culture, and an underground superstar. Angie took the house surname Xtravangaza as her name in 1982. Angie passed on in 1993 at the age of twenty-eight due to AIDS-related liver illness.</p> 
     </article>
     <article>
         <h2>Paris Dupree Paris Dupree</h2>
    <p>Paris was born in 1950 in the United States. She started out as a drag performer and founded the House of Dupree. Paris featured in Jennie Livingstone’s documentary series Paris is burning. She urged the young gays not to be afraid to express themselves in ways mainstream America could not understand.</p> 
     </article>
   </body>
</html>

<style>
  :global(body){
    margin-top:0px;
    margin:0px;
    padding:px;
  }
    body{
        height: 100vw;
        width: 100%;
        background-color:black;
        color: white;
       
    }
    .header{
        display: grid;
        position: relative;
        width: 100%;
        height: 50em;
        background: radial-gradient(circle at right 60% , rgba(206,40,60,1) 0%, rgba(0,0,0,1) 30%),url(https://grainy-gradients.vercel.app/noise.svg);
        filter: contrast(150%) brightness(100%);
        transform: translate(200px, 50);
    }
    .header-img{
        margin-top: -5em;
        margin-left: 0px;
        justify-self: flex-end;
        z-index: -1;
    }

    .header-p{
        min-width: 25em;
        width: 30em;
        height: 10em;
        margin-left: 8em;
        margin-top: -20em;
        z-index: 1;
    }

    q {
    quotes: '"' '"' "'" "'";
    padding: 1em;
    margin: 4em;
    text-align: center;
    }
    q::before {
    content: open-quote;
    }
    q::after {
    content: close-quote;

    }
    section{
        padding:0px;
        margin: 0px;
    }

    h1{
        width: 5em;
        height: 2em;
        color: #CE283C;
        font-size: 8em;
        padding: 1px;
        margin: 0.5em 1em 0em ;
        z-index: 1;
    }


    
</style>