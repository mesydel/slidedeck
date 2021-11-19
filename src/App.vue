<template>
  <div id="app">
    <Training />

    <p>
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
      <!-- <router-link to="/base">Base slides</router-link> -->
    </p>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      reveal: null,
      show: false,
    };
  },
};
</script>

<style>
@import url("../node_modules/reveal.js/css/reveal.css");
@import url("./assets/css/reveal-mesydel.css");

#app {
  height: 100vh;
}
</style>
