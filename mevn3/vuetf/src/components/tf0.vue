<template>
  <div>
    <p>1.xlsx에서 가져온 자료를 Vue.js에서 직접 분석하기</p>
    아들의 키 엑셀데이터 셋을 가져오세요.
    <input
      style="display: none"
      type="file"
      id="file"
      accept=".xls,.xlsx"
      @change="tfget"
    />
    <label for="file">+</label>
    <div v-if="filename">{{ filename }}</div>
    <button v-if="filename" @click="makeModel()">새로 모델링하기</button>
  </div>
</template>

<script>
/* eslint-disable */

import * as XLSX from "xlsx/xlsx.mjs";
export default {
  name: "app",
  data() {
    return { filename: "", tfF: "", tfS: "" };
  },
  methods: {
    run: function (father, sun, name = "아버지와 아들의 키") {
      const tfvis = this.$tfvis;
      const fatherD = father.map((v, i) => ({
        x: i,
        y: v,
      }));
      const sunD = sun.map((v, i) => ({
        x: i,
        y: v,
      }));

      tfvis.render.scatterplot(
        { name },
        { values: [fatherD, sunD] },
        {
          xLabel: "x",
          yLabel: "키",
          height: 250,
          width: 500,
          zoomToFit: 1,
        }
      );
    },
    tfget: function () {
      const father = [];
      const sun = [];
      const input = document.getElementById("file");
      this.filename = input.files[0].name;
      const reader = new FileReader(); //파일을 읽기 위한 생성자
      reader.readAsBinaryString(input.files[0]); //엑셀파일분석
      reader.onload = () => {
        const data = reader.result;
        const workBook = XLSX.read(data, { type: "binary" }); //XLSX을 읽어오는 구조
        const x = workBook.Sheets.train; //시트의 이름
        for (let i = 2; i <= Number(x["!ref"].replace("A1:B", "")); i++) {
          father.push(x["A" + i].v);
          sun.push(x["B" + i].v);
        }
        this.tfF = father; //텐서로 바꾸기전에 하는게 유리
        this.tfS = sun;
        console.log(father, sun);
        this.run(father, sun);
        // console.log(x);
      };
    },
    makeModel() {
      const tf = this.$tf;
      const tff = this.tfF;
      const tfs = this.tfS;
      const tffs = [];
      const tfss = [];
      const bs = [];
      tff.forEach((v, i) => {
        const obj = {};
        obj[v] = tfs[i];
        bs.push(obj);
      });
      tf.util.shuffle(tff);
      bs.forEach((v, i) => {
        tffs.push(Number(Object.keys(bs[i])[0]));
        tfss.push(Object.values(bs[i])[0]);
      });
      this.run(tff, tfs, "셔플 후 아버지와 아들의 키");
      const tfF = tf.tensor(tff);
      const tfS = tf.tensor(tff);
      function createModel() {
        const model = tf.sequential();
        model.add(tf.layers.dense({ units: 12, inputShape: 1 }));
      }
    },
  },
};
</script>

<style scoped>
label {
  display: inline-block;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: #96aae7;
  color: #fff;
  font-size: 2.5em;
}
label:active {
  transform: scale(0.9);
  background-color: #6d85ce;
}
</style>
