<!--
 * @Author: your name
 * @Date: 2021-03-26 15:13:35
 * @LastEditTime: 2021-03-30 13:59:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hz-finance\src\views\Home.vue
-->
<template>
  <h-button @click="printer">打印</h-button>
  <button @click="printer">打印</button>
  <div class="home" id="home">
    <img
      alt="Vue logo"
      :style="{
        width: '800px',
        height: '3000px',
        border: '1px solid',
      }"
      ref="home"
      src="../assets/logo.png"
    />
    999999
  </div>
  <h-switch v-model="value1" active-text="按月付费" inactive-text="按年付费">
  </h-switch>
  <router-view />
</template>

<script lang="ts">
import { callPrinter } from "call-printer";
import { defineComponent, ref} from "vue";
export default defineComponent({
  setup(){
    const home = ref<HTMLImageElement | null>(null);
    let printer=()=>{
      callPrinter(home.value as Element);
    };
    return{
      home,
      printer
    };
  }
});
</script>
