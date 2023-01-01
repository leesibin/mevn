<template>
  <div class="login__form">
    <div>
      <label for="input-username"> 닉네임을 입력하세요. </label>
      <input
        id="input-username"
        type="text"
        v-model="userName"
        @keyup.enter="join"
        required
      />
      <!-- <button @click="joinSubmit">JOIN</button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: ''
    }
  },
  methods: {
    join() {
      const userData = {
        userName: this.userName
      }

      if (userData.userName) {
        this.$store.dispatch('login', userData)
        this.$router.push({
          name: 'chat',
          params: { userData: userData }
        })
      }
    }
  }
}
</script>

<style></style>
