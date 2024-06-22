<template>
  <div class="s-header">
    <div style="display: flex">
      <img :src="icon"/>
      <h2>{{ title }}</h2>
    </div>

    <div v-if="mainStore.loggedIn === true" style="display: flex; justify-content: flex-end">
      <div v-if="mainStore.isGuest === true">@Guest</div>
      <div v-else>@{{mainStore.userName}}</div>
    </div>
  </div>
</template>

<script setup>
import {useMainStore} from "@/stores/mainStore.js";

const mainStore = useMainStore()

defineProps({
  title: {type: String},
  icon: {type: String, default:'../../../public/favicon.ico'},
})
</script>

<style scoped>

</style>
