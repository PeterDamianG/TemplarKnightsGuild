<template>
  <div>
    <div class="fade container">
      <video autoplay muted loop class="myVideo">
        <source src="@/assets/video/dota2.mp4" type="video/mp4">
      </video>
      <div class="text-block">
        <h3>Dota 2</h3>
        <p>Estamos jugando exporadicamente a Dota 2, desde Steam. Pueden adquirirlo gratis desde la tienda debajo el link y nuestro grupo en esa platoforma:</p>
        <span><a href="https://store.steampowered.com/app/570/Dota_2/">Dota 2 - Steam</a></span> -
        <span><a href="https://steamcommunity.com/groups/templarsknightsdota#members">Grupo en Steam</a></span>
      </div>
    </div>
      <!-- Next and previous buttons 
      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>-->
  </div>
</template>

<script>
export default {
  name: 'lista-juegos',
}
</script>

<style scoped>
.myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
}
/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: fixed;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 4vw;
  transition: 1s ease;
  border-radius: 3xp;
}
/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}
/* Fading animation */
.fade {
  -ms-animation-name: fade;
  -ms-animation-duration: 3s;
  -o-animation-name: fade;
  -o-animation-duration: 3s;
  -moz-animation-name: fade;
  -moz-animation-duration: 3s;
  -webkit-animation-name: fade;
  -webkit-animation-duration: 3s;
  animation-name: fade;
  animation-duration: 3s;
}
@-ms-keyframes fade {
	from {opacity: .4} 
	to {opacity: 1}
}
@-o-keyframes fade {
	from {opacity: .4} 
	to {opacity: 1}
}
@-moz-keyframes fade {
	from {opacity: .4} 
	to {opacity: 1}
}
@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}
@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}
/*Texto flotante delante de los videos*/
.container {
  position: fixed;
  text-align: center;
}
/* Bottom right text */
.text-block {
  position: relative;
  margin: 6vw auto;
  width: 75%;
  text-align: center;
  font-size: 4vw;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  border-radius: 1vw;
}
span {
  background: black;
  text-align: center;
  font-size: 2vw;
  cursor: pointer;
  border-style: outset;
  border-radius: 5vw;
  transition: 0.2s;
}
span:hover {
  color: black;
  box-shadow: 2px 2px #888888;
}
/* On smaller screens, decrease text size */
@media only screen and (max-width: 600px) {
	.prev, .next,.text {font-size: 1vw}
  }
  .myVideo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 1vw}
  .myVideo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }
}
</style>
