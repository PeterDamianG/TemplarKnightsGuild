<template>
  <div class="app">
    <div class="nav">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/juegos">¿Qué jugamos?</router-link></li>
      <li><router-link to="/contacto">Contacto</router-link></li>
    </div>
    <router-view/>
    <div class="footer">
      <small>© CopyRight 2019. Todos los derechos reservados. Todas las marcas registradas pertenecen a sus respectivos dueños en EE. UU. y otros países. No afiliados con ninguna organización religiosa.</small>
    </div>
  </div>
</template>

<style>
/*General Setting CSS*/
* {
  box-sizing: border-box;
  margin: 0; 
  padding: 0; 
}
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
}
body {
  background: rgba(0, 0, 0);
  color: #fff;
  font-family: 'Old London', sans-serif;
}
h1 {
  font-size: 3vw;
  text-shadow: 7px 7px black, 2px 2px 5px darkblue;
}
p {
  line-height: 1.7;
  margin-top: 1vw;
  text-shadow: 3px 3px black, 2px 2px 5px darkblue;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
/*Navigater Menu and Links CSS*/
.nav {
  font-size: 2vw;
  z-index: 2;
  width: 100%;
  list-style-type: none;
  background-color: rgba(51, 51, 51, 0.5);
  position: fixed;
  top: 0;
  transition: 2s;
  -webkit-transition: 2s;
  -moz-transition: 2s;
}
.nav:hover {background-color: #333;}
.nav a, a {
  font-weight: bold;
  color: #ffffff;
}
.nav a.router-link-exact-active {color: #969998;}
.nav a:link, .nav a:visited, a:link, a:visited{text-decoration: none;}
.nav li {
  cursor: pointer;
  float: left;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  border-right:1px solid #bbb;
}
.nav li:hover {background-color: black;}
/*Footer*/
.footer {
  width: 100%;
  color: white;
  text-align: center;
  position: fixed;
  bottom: 0;
  border-radius: 5vw 5vw 0 0;
  font-size: 1vw;
  transition: 1s;
  -webkit-transition: 1s;
  -moz-transition: 1s;
  background: rgba(51, 51, 51, 0.5);
}
.footer:hover {background: rgba(51, 51, 51);}
/*Responsive Media Querys*/
@media only screen and (max-width: 568px) {
  .nav {font-size: 4vw;}
  .nav li {float: none;}
}
@media only screen and (max-width: 980px) {
  .nav {font-size: 3vw;}
  .nav li {float: none;}
}
@media only screen and (min-width: 1920px) {
  .nav {font-size: 4vw;}
}
@media(orientation: landscape) {
  .nav {font-size: 3vw;}
}
</style>
