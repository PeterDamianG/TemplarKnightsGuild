<template>
  <div class="services text-center">
    <h2 class="title">¿Dónde encontrarnos?</h2>
    <div class="container grid-3">
      <div>
        <a href="https://discord.gg/f5aXF3C">
        <i class="fab fa-discord fa-5x"></i> <br />
        <h3>Discord</h3> <br /> </a>
        <p>Estamos en un canal privado de Discord, donde podemos comunicarnos.</p>
      </div>
      <div>
        <a href="https://steamcommunity.com/groups/templarsknightsdota#members">
        <i class="fab fa-steam fa-5x"></i> <br />
        <h3>Steam</h3> <br /> </a>
        <p>Un grupo en steam, donde puedes solicitar unirte.</p>
      </div>
      <div>
        <a href="http://templars-knights.foroactivo.com/">
        <i class="fas fa-bookmark fa-5x"></i><br />
        <h3>Foro</h3> <br /></a>
        <p>Antiguo foro, donde rememoramos sucesos.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'redes-sociales',
}
</script>

<style scoped>
.title {font-size: 5vw;}
.container {
  max-width: 960px;
  margin: auto;
  overflow: hidden;
  padding: 4rem 1rem;
}
.text-center {
  text-align: center;
  margin: auto;
}
.grid-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16vw;
}
.services {padding: 4rem 0;}
div p {font-size: 2vw;}
/* RESPONSIVE */
@media only screen and (max-width: 568px) {
  .grid-3 {grid-template-columns: 1fr;}
  .services div {padding: 1.4rem 1rem;}
  .title {font-size: 3vw;}
  div p {font-size: 1.5vw;}
}
@media only screen and (max-width: 980px) {
  .grid-3 {grid-gap: 10vw;;}
  .title {font-size: 4vw;}
  div p {font-size: 1.5vw;}
}
@media only screen and (min-width: 1440px) {
  .grid-3 {grid-gap: 10vw;;}
  .title {font-size: 5vw;}
  div p {font-size: 3vw;}
}
@media only screen and (min-width: 1680px) {
  .grid-3 {grid-gap: 8vw;;}
  .title {font-size: 4vw;}
  div p {font-size: 2.5vw;}
}
@media only screen and (min-width: 1920px) {
  .grid-3 {grid-gap: 4vw;;}
  .title {font-size: 4vw;}
  div p {font-size: 2vw;}
}
</style>
