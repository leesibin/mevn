<template>
  <h3>구구단</h3>
  <input type="text" v-model="gugu" v-on:keyup.enter="bdd()">
  <button v-on:click="bdd">열려라 참깨!</button>
  <button v-on:click="bub">닫아라 참깨!</button>
  <br>
  <span v-for="data0 in guguData" :key="data0">{{ data0 }} </span>
  <p>몇단이죠?{{ guguanum }}</p>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      gugu: '',
      guguData: [],
      guguanum: '',

    }
  },
  
  methods: {
    func: function (text) {
      alert(text)
    },
    bdd: function () {
      this.guguData.push(this.gugu*1 +'x1 = '+this.gugu * 1,
      this.gugu*1 +'x2 = '+this.gugu * 2+',',
      this.gugu*1 +'x3 = '+this.gugu * 3,
      this.gugu*1 +'x4 = '+this.gugu * 4,
      this.gugu*1 +'x5 = '+this.gugu * 5,
      this.gugu*1 +'x6 = '+this.gugu * 6,
      this.gugu*1 +'x7 = '+this.gugu * 7,
      this.gugu*1 +'x8 = '+this.gugu * 8,
      this.gugu*1 +'x9 = '+this.gugu * 9)
      this.guguanum = this.gugu + '단'
      this.gugu = ''
    },
    bub: function () {
      this.gugu = ''
      this.guguData.splice(0);
      this.guguanum = this.guguData.splice(0);

    }
  }
}
</script>

<style>

</style>
