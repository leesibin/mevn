<template>
  <div>
    <h2>로그인</h2>

    닉네임<input type="text" v-model="name" /><br />
    메세지<input type="text" v-model="meg" v-on:keyup.enter="add" />
    <button @click="add">전송</button>
  </div>
  <div id="container">
    안녕하세요. 채팅창을 만들고 있는 중입니다...
    <div>
      <ul>
        <li v-for="data in arrmeg" :key="data">{{ data }}</li>
      </ul>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      naem: '',
      arrmeg: [],
      meg: '',
      megtext: ''
    }
  },
  methods: {
    add: function (message) {
      this.arrmeg.push(this.name, this.meg)
      this.megtext = this.arrmeg
      this.meg = ''
      this.socket.on('SEND_MESSAGE', { message })
    }

    // setData: function () {
    //   if (this.inValue) {
    //     // this.text_save.push(this.inValue)
    //     this.temp = this.inValue
    //   }
    // }
  }
}
</script>

<style></style>
