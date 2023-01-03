<template>
  <div id="container">
    <div id="screen">
      <div v-for="data in arrmeg" :key="data" id="talk">
        <div id="message">{{ arrmeg }}</div>
        <div id="time">{{ time }}</div>
      </div>
      <div id="input_container">
        <input
          id="text_box"
          type="text"
          v-model="message"
          v-on:keyup.enter="sendMessage()"
          autocomplete="off"
        />
        <button @click="sendMessage()" id="send_button">전송</button>
        <!-- <button @click="del_all">대화내용삭제</button> -->
      </div>
    </div>
  </div>
</template>

<script>
// import { getCurrentInstance, onMounted, reactive } from '@vue/runtime-core'
import dayjs from 'dayjs'

export default {
  name: 'App',
  created() {
    this.$socket.on('chat', (data) => {
      window.scrollTo(0, 0)
      this.arrmeg += data.message + '\n'
    })
  },
  data() {
    return {
      arrmeg: '',
      message: '',
      time: dayjs().format('HH:mm')
    }
  },

  methods: {
    sendMessage() {
      this.$socket.emit('chat', { message: this.message })
      this.message = ''
    }
  },

  del_all: function () {
    this.arrmeg = []
  }
}
</script>

<style>
#container {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
}

#screen {
  width: 500px;
  height: 800px;
  border-radius: 30px;
  /* background-image: url(../../public/i013883833765.gif); */
  display: flex;
  flex-direction: column;
  align-items: end;
}

#input_container {
  position: fixed;
  bottom: 100px;
}

#text_box {
  width: 400px;
  height: 35px;
  flex-grow: 1px;
  border-radius: 32px;
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
  border-radius: 10px;
  border: 1px solid darkcyan;
  background-color: rgba(255, 255, 255, 0.486);
  font-size: 18px;
  font-weight: 500;
  margin-right: 30px;
}

li {
  list-style-type: none;
}
</style>
