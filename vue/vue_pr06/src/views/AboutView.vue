<template>
  <div>vue로작성하기</div>
  <form action="">
    <video id="video0"></video>
    <button @click="main()">tensor추출</button>
    <div>{{ resultgood }}</div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      resultgood: "",
    };
  },
  methods: {
    main: async function () {
      const webcam = document.getElementById("video0");
      const cam = await tf.data.webcam(webcam);
      const img = await cam.capture();
      const mnet = await mobilenet.load();
      const result = await mnet.classify(img);
      this.resultgood =
        "추측 :" + result[0].className + "확률 :" + result[0].probability;
      img.print();
      tf.dispose(img);
      axios({
        url: "http://localhost:3000/about",
        method: "POST", // 전송방식을 post로 지정
        data: {
          resultgood: this.resultgood,
        },
      }).then((res) => {
        alert(res.data.message);
      });
    },
  },
};
</script>

<style>
.video0 {
  width: 300px;
  height: 300px;
}
</style>
