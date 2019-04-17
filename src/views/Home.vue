<template>
  <div class="home">
    <Presentacion />
    <RedesSociales />
    <SobreNosotros />
  </div>
</template>

<script>
import Presentacion from '@/components/Presentacion.vue'
import RedesSociales from '@/components/RedesSociales.vue'
import SobreNosotros from '@/components/SobreNosotros.vue'

export default {
  name: 'home',
  components: {
    Presentacion,
    RedesSociales,
    SobreNosotros
  }
}
</script>
