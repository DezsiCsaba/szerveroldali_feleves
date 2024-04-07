<template>
  <div class="s-header">
    <img :src="icon"/>
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup>
defineProps({
  title: {type: String},
  icon: {type: String, default:'../../../public/favicon.ico'},
})
</script>

<style scoped>

</style>
