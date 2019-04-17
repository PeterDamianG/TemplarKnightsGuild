<template>
  <div class="bg-light">
    <div class="container text-center">
      <div class="grid-2">
        <div class="center"><i class="fas fa-khanda fa-10x"></i></div>
        <div>
          <h3 class="titleAbout">¡Sobre Nosotros!</h3><br />
          <p class="textAbout">
            <span>Somos un grupo de amigos, los cuales hemos compartidos innumerables partidas en nuestros juegos favoritos. Siempre dispuestos a enfrentar los retos y superarlos cueste lo que cueste. Dispuestos a aceptar a aquellos nuevos miembros, con ganas de pasar buenos momentos y simplemente GG.</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sobre-nosotros',
}
</script>

<style scoped>
.bg-light {
  background: white;
  color: #333;
}
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
.grid-2 {
  display: grid;
  grid-gap: 1vw;
  grid-template-columns: 10% 90%;
}
.titleAbout {
  color: rgb(0, 0, 0);
  font-size: 5vw;
}
.textAbout {
  color: rgb(0, 0, 0);
  text-shadow: none;
  font-size: 2.5vw;
}
@media only screen and (max-width: 568px) {
  .grid-2 {grid-template-columns: 1fr;}
}
@media only screen and (max-width: 980px) {
  .titleAbout {font-size: 4vw;}
  .textAbout {font-size: 2vw;}
}
@media only screen and (min-width: 1440px) {
  .titleAbout {font-size: 6vw;}
  .textAbout {font-size: 3vw;}
}
@media only screen and (min-width: 1680px) {
  .titleAbout {font-size: 6.5vw;}
  .textAbout {font-size: 3.25vw;}
}
@media only screen and (min-width: 1920px) {
  .titleAbout {font-size: 7vw;}
  .textAbout {font-size: 3.5vw;}
}
</style>
