<template>
  <HeaderComponent />
  <router-view />
  <FooterComponent />
</template>

<script>
import FooterComponent from "./share/FooterComponent.vue";
import HeaderComponent from "./share/HeaderComponent.vue";

export default {
  name: "App",
   components: {
    FooterComponent,
    HeaderComponent,
  },
  data() {
    return {

    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
