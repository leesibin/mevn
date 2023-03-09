<template>
  <div>
    <p>2.캠 얼굴인식</p>
    <button @click="main()">캠동작</button>
    <button>분석</button>
    <p v-if="length">{{ length }}</p>
    <div id="display">
      <canvas id="canvas"></canvas>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
const video = document.createElement("video");
import * as blazeface from "@tensorflow-models/blazeface";

export default {
  name: "app",
  data() {
    return {
      length: 0,
      predictions: "",
    };
  },
  methods: {
    main: async function () {
      const tf = this.$tf;
      this.length = "얼굴인식 중...";
      const display = document.getElementById("display");
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");

      display.appendChild(video);
      video.width = 400;
      video.height = 400;
      // const CAMERA_SIZE = { height: 400, width: 400 };
      tf.data.webcam(video);
      // console.log(blaze);

      for (;;) {
        const blaze = await blazeface.load(); //묘듈 인식
        const predictions = await blaze.estimateFaces(video); //비디오 분석
        tf.dispose(blaze);
        this.predictions = predictions;
        this.length = predictions.length;
        if (predictions.length > 0) {
          for (let i = 0; i < predictions.length; i++) {
            const start = predictions[i].topLeft;
            const end = predictions[i].bottomRight;
            const size = [end[0] - start[0], end[1] - start[1]];
            canvas.hegint = 400; //CAMERA_SIZE.height
            canvas.width = 400; //CAMERA_SIZE.width
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 4;

            const loop = () => {
              ctx.strokeRect(start[0], start[1], size[0], size[1]);
            };
            setTimeout(loop, 0);
          }
        } else {
          canvas.height = 0;
          canvas.width = 0;
        }
      }
    },
  },
};
</script>

<style scoped>
body {
  position: relative;
}
canvas,
video {
  position: absolute;
}
</style>
