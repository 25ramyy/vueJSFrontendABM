<template>
  <div>
<form
  id="app"
  @submit="onSubmit"
  action="http://localhost:3001/suba"
  method="post"
>
<p>
    <label for="id">ID</label>
    <input
      id="id"
      v-model="form.id"
      type="text"
      name="id"
    >
  </p>
  <p>
    <label for="instrumento">Instrumento</label>
    <input
      id="instrumento"
      v-model="form.instrumento"
      type="text"
      name="instrumento"
    >
  </p>

  <p>
    <label for="marca">marca</label>
    <input
      id="marca"
      v-model="form.marca"
      type="text"
      name="marca">
  </p>


  <p>
    <label for="modelo">modelo</label>
    <input
      id="modelo"
      v-model="form.modelo"
      type="text"
      name="modelo">
  </p>
  <p>
    <label for="imagen">imagen</label>
    <input
      id="imagen"
      v-model="form.imagen"
      type="text"
      name="imagen">
  </p>

  <p>
    <label for="precio">precio</label>
    <input
      id="precio"
      v-model="form.precio"
      type="number"
      name="precio"
      min="0">
  </p>
  <p>
    <label for="costoEnvio">costoEnvio</label>
    <input
      id="costoEnvio"
      v-model="form.costoEnvio"
      type="text"
      name="costoEnvio">
  </p>
 <p>
    <label for="cantidadVendida">cantidadVendida</label>
    <input
      id="cantidadVendida"
      v-model="form.cantidadVendida"
      type="text"
      name="cantidadVendida">
  </p>
 <p>
    <label for="descripcion">descripcion</label>
    <input
      id="descripcion"
      v-model="form.descripcion"
      type="text"
      name="descripcion">
  </p>



  <p>
    <input
      type="submit"
      value="Enviar"
    >
  </p>

</form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        instrumento: "",
        marca: "",
        modelo: "",
        precio: "",
        costoEnvio: "",
        cantidadVendida: "",
        descripcion: ""
      },
    };
  },
 methods: {
        onSubmit(event) {
      event.preventDefault();
      axios.post("http://localhost:3001/suba", this.form).then((res) => {
        console.log(res.data);
        });}
      
      }

}
</script>