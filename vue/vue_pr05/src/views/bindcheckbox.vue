<template>
  <div>
    <input type="checkbox" id="inHtml" value="HTML" v-model="chkData" />
    <label for="inHtml">HTML</label>
    <input type="checkbox" id="inCSS" value="CSS" v-model="chkData" />
    <label for="inHtml">CSS</label>
    <input
      type="checkbox"
      id="inJavascript"
      value="Javascript"
      v-model="chkData"
    />
    <label for="inJavascript">Javascript</label>
  </div>
  <div v-if="chkData.length !== 0">선택하신 내용은:{{ chkData }}</div>
  <br />
  <h2>v-for체크박스만들기</h2>
  <input v-model="chkData2" type="checkbox" id="chk" value="chk" />
  <label for="chk">{{ chk }}</label>
  <div>{{ chk }}</div>
  <!-- v-for로체크박스를 만드시오 vuejs nodejs json -->
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      chk: "",
      chkData2: [{ name: "HTML" }, { name: "CSS" }, { name: "Javascript" }],
      chklist: "",
      chkData: [],
    };
  },
  methods: {},
};
</script>

<style></style>
