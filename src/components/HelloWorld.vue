<template>
  <div>
    <h1>title</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  props: ["msg"],
  data() {
    return {};
  },
};
</script>
