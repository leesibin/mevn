<template>
  <div>
    <h1>3.데이터 바인딩</h1>
    <h2>v-model을 사용하여 양방향을 구현</h2>
    <span>v-model:</span><input type="text" v-model="inData">
    <h3>{{ inData }}</h3>
    <button @click="outData">꺼내오기:{{ inData }}</button>
    <br />
    <hr />
    <h1>4.데이터 단방향 바인딩</h1>
    <h2>v-bind와 v-on을 사용하여 단방향(2가지=양방향)을 구현한다.</h2>
    <h4>{{ inValue }}</h4>
    <input type="text" v-bind:value="inValue" v-on:input="UpValue">
    <button style="margin: 0 5px;" @click="setData">데이터 입력</button>
    <button @click="getData">데이터 출력</button>
    <br />
    <hr />
    <button @click="img01">Page1</button>
    <button>Page2</button>
    <button>Page3</button>
    <button>Page4</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      outData: '꺼내온 값이에요.',
      inData: '',
      inValue: '',
      temp: ''
    }
  },
  methods: {
    UpValue: function (e) {
      this.inValue = e.target.value
    },
    setData: function (e) {
      if (this.inValue) {
        alert('v-binding 된 값' + this.inValue + '를 입력함')
        this.temp = this.inValue
        this.inValue = ''
      }
    },
    getData: function (e) {
      alert('v-on으로 저장된 값' + this.temp + '를 꺼내옴')
      this.inValue = this.temp
    }
  }
}
</script>

<style>

</style>
