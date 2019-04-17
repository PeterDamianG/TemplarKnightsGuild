<template>
  <div class="header">
    <div class="header-content">
      <h1 class="titleTK">Templar Knights Guild</h1>
      <img src="@/assets/img/logo.jpg" alt="Logo Templar Knights Guild" class="logo" />
      <p class="textTK"> Sitio web oficial del guild Templar Knights. Grupo de jugadores en multitud de juegos.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'presentacion-imagen',
}
</script>

<style scoped>
.titleTK {font-size: 4vw;}
.textTK {font-size: 2.5vw;}
.header::after {
  content: '';
  height: 100vh;
  width: 100%;
  background-image: url('./backgroundimg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  filter: blur(8px);
  -webkit-filter: blur(8px);
  -o-filter: blur(8px);
  -ms-filter: blur(8px);
  -moz-filter: blur(8px);
  transition: all 2000ms;
}
.header:hover::after {
  filter: blur(0px);
  -webkit-filter: blur(0px);
  -o-filter: blur(0px);
  -ms-filter: blur(0px);
  -moz-filter: blur(0px);
}
.header-content {
  position: absolute;
  z-index: 1;
  left: 50%;
  margin-top: 3.5vw;
  margin-left: -145px;
  width: 300px;
  height: 350px;
  text-align: center;
  transition: all 1s;
}
.header-content .logo {
  height: 15vw;
  width: 15vw;
  border-radius: 8vw;
  box-shadow: 5px 5px black;
}
@media only screen and (max-width: 568px) {
  .header::after {height: 50vh;}
  .header-content {
    top: 35%;
    margin-top: 0.5vw;
  }
  .header-content .logo {
    height: 140px;
    width: 140px;
  }
  .header-content .textTK {display: none;}
}
@media only screen and (max-width: 980px) {
  .header-content {
    top: 25%;
    margin-top: 0.5vw;
  }
  .titleTK {font-size: 5vw;}
  .textTK {font-size: 5vw;}
}
@media only screen and (min-width: 1440px) {
  .titleTK {font-size: 2.5vw;}
  .textTK {font-size: 2.5vw;}
}
@media only screen and (min-width: 1680px) {
  .titleTK {font-size: 1.75vw;}
  .textTK {font-size: 1.75vw;}
}
@media only screen and (min-width: 1920px) {
  .titleTK {font-size: 1.25vw;}
  .textTK {font-size: 1.25vw;}
  .header-content .logo {
    height: 340px;
    width: 340px;
  }
}
</style>
