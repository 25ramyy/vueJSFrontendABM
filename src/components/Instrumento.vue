<template>
  <div>
    <b-card
      tag="article"
      style="max-width: 20rem; min-width: 20rem;"
      class="mb-2"
    >
      <b-card-img
        :src="'/images/' + instrumentoParam.imagen"
        alt="Image"
        style="min-height:200px; max-height:200px"
      ></b-card-img>
      <b-card-title :title="instrumentoParam.instrumento"></b-card-title>
      <b-card-text>
        $ {{ instrumentoParam.precio }}
      </b-card-text>
      <img v-if="instrumentoParam.costoEnvio == 'G'" :src="'/images/camion.png'" :key="instrumentoParam.costoEnvio" class="leaderimg">
        
        <span style="color:green" v-if="instrumentoParam.costoEnvio == 'G'"> 
        Envios gratis a todo el pais
        </span>
        <span style="color:orange" v-else> 
        Costo de Envio interior de Argentina: ${{ instrumentoParam.costoEnvio }} 
        </span>
      <b-card-text>
      {{ instrumentoParam.cantidadVendida }} vendidos
      </b-card-text>
      
      <div style="text-align:center">
        <b-button
          :href="'/detalle/' + instrumentoParam.id"
          variant="primary"
          style="width:100%">
            <b>Detalle</b>
        </b-button>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  props: ["instrumentoParam"]
};
</script>
<style lang=""></style>
