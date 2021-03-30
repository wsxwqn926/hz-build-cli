<!--
 * @Author: your name
 * @Date: 2021-03-26 15:13:35
 * @LastEditTime: 2021-03-29 13:52:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hz-finance\src\App.vue
-->
<template>
  <div id="nav">
    <router-link to="/login">login</router-link>|
    <router-link :to="{ name: 'About' }">about</router-link>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
// import { useProvider } from "@/store";
// import router from "@/router";
export default defineComponent({
  setup() {
    // useProvider();
    // router.push({name:"About"});
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
