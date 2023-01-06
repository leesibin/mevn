<template>
  <h1>params:연습입니다.</h1>
  <h1>name:{{ $route.params.name }}</h1>
  <h1>age:{{ $route.params.age }}</h1>
</template>

<script>
export default {
  name: "app",
  created() {
    console.log(this.$route.params.name);
    console.log(this.$route.params.age);
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
