<template>
  <div>
    <h1>query 연습입니다.</h1>
    <h1>name:{{ $route.query.name }}</h1>
    <h1>age:{{ $route.query.age }}</h1>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    console.log(this.$route.query.name);
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
