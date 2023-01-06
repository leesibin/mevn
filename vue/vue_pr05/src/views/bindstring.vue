<template>
  <div>hello{{ username }}</div>
  <div>hello{{ arr }}</div>
  <div>hello{{ obj }}</div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      username: "오미자",
      arr: [1, 2, 3, 4, 5],
      obj: {},
    };
  },
  methods: {},
};
</script>

<style></style>
