<template>
  <div>
<form
  id="app"
  @submit="onSubmit"
  action="http://localhost:3001/baja"
  method="post"
>
<p>
    <label for="id">Baja de Instrumento por ID</label>
    <input
      id="id"
      v-model="form.id"
      type="text"
      name="id"
    >
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
        id: ""
      },
    };
  },
 methods: {
        onSubmit(event) {
      event.preventDefault();
      axios.post("http://localhost:3001/baja", this.form).then((res) => {
        console.log(res.data);
        });}
      
      }

}
</script>