<template>
  <div>
    <input type="text" v-model="Ename" v-on:keyup.enter="joinSubmit()" />
    <button @click="joinSubmit()">참여</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      Ename: "",
    };
  },
  created() {
    this.$socket.on("Username", this.Ename);
  },
  methods: {
    joinSubmit() {
      this.$router.push({ path: "home", query: { name: this.Ename } });
      this.$socket.emit("Username", this.Ename);
    },
    mounted() {
      this.Ename = this.$route.params.name;
    },
  },
};
</script>

<style></style>
