<template>
  <div>
    <p>1. xlsx 에서 가져온 자료 Vuejs에서 직접 분석하기</p>
    아들의 키 엑셀데이터 셋을 가져오세요.
    <div>
      <input
        style="display: none"
        id="file"
        @change="tfget()"
        type="file"
        accept=".xls, .xlsx"
      />
      <label for="file">+</label>
    </div>
  </div>
  <div>
    <div v-if="fileName">로드됨: {{ fileName }}</div>
    <button @click="makeModel()" v-if="fileName">새로 모델링하기</button><br />
    <input v-if="done" type="text" v-model.number="inputData" />
    <button @click="predict()" v-if="done">모델적용</button>
    <div>{{ load }}</div>
    <div v-if="result">
      모델로 부터 얻은 예측: {{ inputData }} 일때 {{ result }}
    </div>
  </div>
  <div id="plot1"></div>
</template>
<script>
/* eslint-disable */
import * as XLSX from "xlsx/xlsx.mjs";

export default {
  data() {
    return {
      done: false,
      fileName: "",
      tfF: null,
      tfS: null,
      inputData: 174,
      result: "",
      load: "",
    };
  },

  watch: {
    inputData: "predict",
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
      // const tf = this.$tf

      const father = [];
      const sun = [];
      // let tfF, tfS
      const input = document.getElementById("file");
      this.fileName = input.files[0].name;
      const reader = new FileReader();

      reader.onload = () => {
        const data = reader.result;
        const workBook = XLSX.read(data, { type: "binary" });
        const x = workBook.Sheets.train; // 시트이름
        for (let i = 2; i <= Number(x["!ref"].replace("A1:B", "")); i++) {
          father.push(x["A" + i].v);
          sun.push(x["B" + i].v);
        }
        this.tfF = father;
        this.tfS = sun; // 텐서로 변환한 것을 넘기지 말것(고생함 ㅠ)
        // console.log(tf.tensor(father), tf.tensor(sun))
        console.log(father, sun);
        // tf.util.shuffle(father)
        // tf.util.shuffle(sun)

        this.run(father, sun);
      };
      reader.readAsBinaryString(input.files[0]);
    },

    makeModel: async function () {
      this.load = "셔플 후 모델링 중...";

      const tf = this.$tf;
      const tfvis = this.$tfvis;
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
      tf.util.shuffle(bs);
      bs.forEach((v, i) => {
        tffs.push(Number(Object.keys(bs[i])[0]));
        tfss.push(Object.values(bs[i])[0]);
      });
      this.run(tffs, tfss, "셔플 후 아버지와 아들의 키");

      const tfF = tf.tensor(tff);
      const tfS = tf.tensor(tfs);
      function createModel() {
        const model = tf.sequential();
        model.add(tf.layers.dense({ units: 12, inputShape: 1 }));

        model.add(tf.layers.dense({ units: 12, activation: "relu" })); // activation: 'relu'
        model.add(tf.layers.dense({ units: 1, activation: "relu" }));
        model.compile({
          loss: "meanSquaredError", // 'binaryCrossentropy',
          optimizer: "adam",
        });
        return model;
      }
      const fitParam = {
        batchSize: 36,
        epochs: 100,
        callbacks: [
          tfvis.show.fitCallbacks(
            { name: "아버지키에 대한 아들키 예측 " },
            ["loss", "mse"],
            { height: 200, width: 500, callbacks: ["onEpochEnd"] }
          ),
          {
            onEpochEnd: function (epoch, logs) {
              console.log("epoch", epoch, logs, "RMSE=>", Math.sqrt(logs.loss));
            },
          },
        ],
      };

      const model = createModel();
      console.time("동작시간");
      console.log(3, tfF, tfS, fitParam, model);
      await model.fit(tfF, tfS, fitParam);
      await model.summary();
      this.load = "";
      await model.predict(tf.tensor([170])).print();
      await model.save("localstorage://fatherSun");
      await console.log("모델 저장됨");
      tf.dispose(tfF);
      tf.dispose(tfS);
      console.timeEnd("동작시간");
      this.done = true;
    },
    predict: async function () {
      const tf = this.$tf;
      const model = await tf.loadLayersModel("localstorage://fatherSun");
      console.log(model.getWeights());
      const pre = await model.predict(tf.tensor([this.inputData]));
      this.result = pre.dataSync()[0].toFixed(2);
      pre.print();
    },
  },
  components: {},
  mounted() {},
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
