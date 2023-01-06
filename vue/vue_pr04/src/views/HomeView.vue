<template>
  <div id="container">
    <div id="screen">
      <div id="screen_detail">
        <div v-for="data in Ameg" :key="data" id="talk">
          <div id="message">{{ data }}</div>
        </div>
      </div>
      <div id="input_container">
        <input
          id="text_box"
          type="text"
          v-on:keyup.enter="send()"
          v-model="message"
          autocomplete="off"
        />
        <button @click="send()" id="send_button">전송</button>
        <button @click="del()">삭제</button>
        <!-- <form action="/up" method="post" enctype="multipart/form-data">
          <input
            type="file"
            name="ufile"
            accept="image/jpeg, image/jpg, image/png, image/gif"
            required
          />
          <input type="submit" value="이미지전송" @click="imges()" />
        </form> -->
      </div>
    </div>
  </div>
</template>

<script>
// import { getCurrentInstance, onMounted, reactive } from '@vue/runtime-core'
import dayjs from "dayjs";

export default {
  name: "App",
  data() {
    return {
      name: this.$route.query.name,
      Ameg: [],
      message: "",
      time: dayjs().format("HH:mm"),
    };
  },

  created() {
    this.$socket.on("chat", (data) => {
      window.scrollTo(0, document.body.scrollHeight);
      const data0 = data.time + data.id + "님 - " + data.message;
      this.Ameg.push(data0);
    });
  },

  methods: {
    send() {
      if (this.message) {
        this.$socket.emit("chat", {
          message: this.message,
          id: this.name,
          time: this.time,
        });
        this.message = "";
      }
    },

    del() {
      this.Ameg = [];
    },
  },
};
</script>

<style>
#container {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#screen {
  width: 500px;
  height: 800px;
  border-radius: 30px;
  background-image: url(../../public/img45.jpg);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
}

#screen_detail {
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: flex-end;
  margin-right: 10px;
}

#input_container {
  position: fixed;
  bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#text_box {
  width: 300px;
  height: 30px;
  font-size: 18px;
  flex-grow: 1px;
  border-radius: 32px;
  padding: 10px;
}

#send_button {
  width: 80px;
  height: 37px;
  margin-top: 2px;
  margin-left: 5px;
  border-radius: 10px;
  border: 2px solid rgb(0, 143, 12);
  background-color: rgb(129, 228, 142);
  font-size: 20px;
}

#talk {
  margin-top: 10px;
  display: flex;
}

#time {
  margin-right: 20px;
  top: 30px;
  font-size: 15px;
  font-weight: 500;
}

#message {
  width: auto;
  max-width: 300px;
  height: auto;
  word-break: break-all;
  border-radius: 10px;
  border: 1px solid darkcyan;
  background-color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  font-weight: 500;
  margin-right: 30px;
  padding: 10px;
}

li {
  list-style-type: none;
}
</style>
