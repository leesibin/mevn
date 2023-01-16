<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <!-- <router-link to="/bindstring">string</router-link>|
    <router-link to="/bindhtml">bindhtml</router-link>|
    <router-link to="/bindinput">bindinput</router-link>|
    <router-link to="/bindselect">bindselect</router-link>|
    <router-link to="/bindcheckbox">bindcheckbox</router-link>| -->
    <router-link to="/API1">API1</router-link>|
    <router-link to="/API2">API2</router-link>|
    <router-link to="/API3">API3</router-link>|
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
