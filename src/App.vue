<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="reveal">
      <div class="slides">
        <section data-background-color="#344c77">
          <h1>Mesylab SRL</h1>
          <h2>Formation</h2>
        </section>

        <section data-background-color="aquamarine">
          <h2>🐟</h2>
        </section>
        <section data-background-color="rgb(70, 70, 255)">
          <h2>🐳</h2>
        </section>

        <section>
          <section>
            Test title
            <h2>test</h2>
          </section>
          <section>
            <h1>Test</h1>
          </section>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Reveal from "reveal.js/js/reveal";

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  mounted() {
    Reveal.initialize({});
  },
};
</script>

<style>
@import url("../node_modules/reveal.js/css/reveal.css");
@import url("../node_modules/reveal.js/css/theme/white.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100vh;
}
</style>
