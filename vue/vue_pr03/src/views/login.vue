<template>
  <div>
    <form action="" @submit.prevent="color" class="login_form">
      <input type="text" v-model="id_value" name="id" placeholder="아이디" />
      <br />
      <input
        type="password"
        v-model="psw_value"
        name="id"
        placeholder="비밀번호"
        v-on:keyup.enter="login"
      />
      <br />
      <button type="submit" v-on:click="login">Login</button>
    </form>
    <a class="login_forget" href="">비밀번호를 잊으셨나요?</a>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      id_value: '',
      psw_value: '',
      loginBtn: '',
      id_arr: []
    }
  },

  methods: {
    // login() {
    //   if (this.id_value.length > 0 && this.psw_value.length >= 5) {
    //     alert('로그인 되었습니다.')
    //     location.replace('http://localhost:8080/chating')
    //   } else {
    //     alert('로그인 실패!')
    //     this.id_value = ''
    //     this.psw_value = ''
    //   }
    // }
    // id_confirm: function () {
    //   this.$socket.on
    // }
  }
}
</script>

<style></style>
