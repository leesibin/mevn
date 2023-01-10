<template>
  <nav>
    <router-link to="/">채팅창</router-link> |
    <router-link to="/about">로그인창</router-link>|
    <router-link to="/idid">Ex)채팅창</router-link>|
    <router-link to="/check">Ex)값전달1</router-link>|
    <router-link to="/check2">Ex)값전달2</router-link>|
    <router-link to="/check3">Ex)값전달3</router-link>|
    <router-link to="/check4">Ex)값전달</router-link>|
    <router-link to="/sock">socket예제</router-link>|
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
