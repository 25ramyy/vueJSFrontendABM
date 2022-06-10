<template>
  <div class="home">
    <b-container fluid>
      <b-card-group deck>
        <div
          v-for="instrumento in instrumentosData"
          :key="instrumento.id"
          style="margin-top:15px"
        >
          <instrumento-item :instrumentoParam="instrumento"></instrumento-item>
        </div>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Instrumento from "@/components/Instrumento.vue";

export default {
  name: "Home",
  components: {
    "instrumento-item": Instrumento
  },
  mounted() {
    this.getInstrumentos();
  },
  data() {
    return {
      instrumentosData: []
    };
  },
  methods: {
    async getInstrumentos() {
      const res = await fetch("http://localhost:3001/api");
      const resJson = await res.json();
      console.log(resJson);
      this.instrumentosData = resJson.data;
    }
  }
};
</script>
