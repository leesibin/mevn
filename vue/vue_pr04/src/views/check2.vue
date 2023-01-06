<template>
  <div>페이지</div>
  <sbMain :sbData1="data1"></sbMain>
  <sbMain :sbData1="data2"></sbMain>
  <div>
    <button @click="queryList()">Query프로그래밍 방식</button>
  </div>
  <router-link
    :to="{ name: 'check3', query: { name: 'Query 선언전 방식', age: 10 } }"
    >Query방식</router-link
  >
  <br />
  <button @click="parasmsList()">params프로그래밍 방식</button><br />
  <router-link
    :to="{ name: 'check4', params: { name: 'params 선언전 방식', age: 30 } }"
    >params방식</router-link
  >
</template>
<script>
import sbMain from "./check.vue";
export default {
  name: "app",
  data() {
    return {
      data1: "Main에서 서브로 가져온 sbMain1의 내용입니다",
      data2: "Main에서 서브로 가져온 sbMain2의 내용입니다",
    };
  },
  methods: {
    queryList() {
      this.$router.push({
        name: "check3",
        query: { name: "Query 프로그램 방식", age: 20 },
      });
    },
    parasmsList() {
      this.$router.push({
        name: "check4",
        params: { name: "params 선언전 방식", age: 40 },
      });
    },
  },
  components: { sbMain },
};
</script>

<style></style>
