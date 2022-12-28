<template>
  <div>
    <button @click="page = p" v-for="p in pages" :key="p" :class="{active: page == p}">
      {{ p }}</button>
    <div v-for="(g, i) in pages" :key="i">
      <div v-if="g == page"></div>
      {{ p }}
      <img :src="'../../img' + (i + 1) + '.jpg'" alt="" srcset="">

    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      page: 'page1',
      pages: ['page1', 'page2', 'page3', 'page4']
    }
  },
  methods: {}
}
</script>

<style scope>
button {
  scale: 200%;
  background-color: #fff;
  border: 1px solid rgb(79, 145, 136);
  margin: 30px;
  cursor: pointer;
}

button:hover {
  background: rgb(45, 146, 177);
}

button:active {
  color: #fff;
  background: rgb(39, 111, 170);
}

img {
  width: 50%;
  height: 50%;
}
</style>
