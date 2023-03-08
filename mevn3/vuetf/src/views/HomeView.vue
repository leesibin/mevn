<template>
  <div>
    <h2>특강 part3. tfjs활용</h2>
    <a href="https://www.tensorflow.org/js?hl=ko">tensorflow</a>
    <hr />
    <h3>외부링크들</h3>
    <ol>
      <li v-for="i in 9" :key="i">
        <a :href="'http://localhost:8080/danfo0' + i + '.html'">{{
          `danfo0${i}.html`
        }}</a>
      </li>
    </ol>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "HomeView",
  data() {
    return {};
  },
  methods: {},
};
</script>
