<template>
  <div class="article">
    <h2 class="title-text">¿Quieres contactarnos?</h2><br />
    <p>¡Puedes encontranos jugando!<br /><br /> También te recomendamos que nos intentes ubicar en <a href="https://discord.gg/f5aXF3C">Discord</a>, <a href="https://steamcommunity.com/groups/templarsknightsdota#members">Steam</a> o en el servidor del juego que estemos jugando.<br/> Pero te pedimos, por favor. Que no nos intenter buscar en redes sociales, si te unes a la familia, ni te daras cuenta y ya nos tendrás a todos de amigos, sin necesidad de stalkear a nadie. Gracias.<br/> 
    <RedesSociales class="bg-darkgrey" />
    Aunque debajo, puedes intentar contactar al webmaster, por si encuentras algún error o necesitas algo: </p>
      <div class='column'>
        <div class='container'>
          <h2>Peter DG</h2><br/>
          <p class='title'>Programmer &amp; Student</p><br/>
          <p>Hi, I'm a programmer at the beginning and a student by nature. My first language is Spanish and I am trying to learn English. You want contact me? below have links. Thank you for your time.</p><br/>
          <a href='mailto:PeterDamianG@Gmail.com'><p>PeterDamianG@Gmail.com</p></a><br/>
          <a href='https://github.com/PeterDamianG' target="_blank"><p><button class='button bg-darkgrey'>Contact</button></p></a>
        </div>
    </div>
  </div>
</template>

<script>
import RedesSociales from '@/components/RedesSociales.vue'

export default {
  name: 'contacto-tk',
  components: {
    RedesSociales
  }
}
</script>

<style scoped>
.title-text {
  font-size: 5vw;
}
p {font-size: 2.5vw;}
.bg-darkgrey {background-image: linear-gradient(rgb(0, 0, 0), rgb(50, 50, 50), rgb(0, 0, 0));}
.article {
  margin-top: 5vw;
  text-align: center;
  font-size: 2vw;
  text-shadow: 5px 5px black, 2px 2px 5px darkblue;
}
a:hover { 
  transition: 1.5s;
  color: blue;
  text-decoration: underline;
}
.column {
  float: left;
  width: 100%;
  margin-bottom: 16px;
  padding: 0 8px;
  margin-top: 2vw;
  border: double;
}
@media screen and (max-width: 650px) {
  .column {
      width: 100%;
      display: block;
  }
}
.container {padding: 0 16px;}
.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}
.title {color: grey;}
.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}
.button:hover {background-color: rgb(150, 150, 150);}
</style>
