<template>
  <div>html{{ htmlstring }}</div>
  <div v-html="htmlstring"></div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      htmlstring: "<p style='color:red;'>빨간색이요 ",
    };
  },
  methods: {},
};
</script>

<style></style>
