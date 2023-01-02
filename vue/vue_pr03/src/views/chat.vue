<template>
  <div id="container">
    안녕하세요. 채팅창을 만들고 있는 중입니다...
    <div>
      <ul>
        <li v-for="data in arrmeg" :key="data">{{ data }}</li>
      </ul>
    </div>
    <div>
      <input type="text" v-model="state" v-on:keyup.enter="add" />
      <button @click="add">전송</button>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted, reactive } from '@vue/runtime-core'

export default {
  name: 'App',
  data() {
    return {
      inmeg: '',
      arrmeg: [],
      meg: '',
      megtext: ''
    }
  },

  setup() {
    const app = getCurrentInstance()
    const $socket = app.appContext.config.globalProperties.$socket

    const state = reactive({
      message: '',
      textarea: ''
    })

    function chatSubmit() {
      $socket.emit('chat', {
        message: state.message
      })
      state.message = ''
    }

    onMounted(() => {
      $socket.on('chat', (data) => {
        state.textarea += data.message + '\n'
      })
    })

    return {
      state,
      chatSubmit
    }
  },

  methods: {
    add: function () {
      this.arrmeg.push(this.state)
      this.megtext = this.arrmeg
    }
  }
}
</script>

<style>
li {
  list-style-type: none;
}
</style>
