<template>
  <div class="container">
    <div v-if="$slots.prepend" class="prepend-icon">
      <slot name="prepend" />
    </div>

    <div class="btn-controll" @click="emit('click')">
      <button class="btn" :type="type" name="submit"></button>
      <div class="btn-label">{{ label }}</div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['click'])
const props = defineProps({
  type: {type: String, default:'button'},
  label: {type: String, default: 'submit'},
  color: {type: String, default: 'positive'}
})
const theme = {
  color: 'var(--'+props.color+')',
  hover: 'var(--'+props.color + '-hover)'
}
</script>

<style scoped>
.container{
  border-radius: var(--border-radius-sm);
  display: flex;
  align-items: center;
  transition-duration: .3s;
  box-shadow: var(--elevated);
  border: 1px solid transparent;
  background: v-bind('theme.color');
}
.container:hover{
  transition-duration: .3s;
  background: v-bind('theme.hover');
}
.btn-controll{
  display: grid;
  width: 100%;
  justify-items: center;
}
.btn{
  cursor: pointer;
  z-index: 1;
  grid-area: 1/1/-1/-1;
  background: none;

  width: 100%;
  min-width: 0;
  outline: 0;
  border: none;
}
.btn-label{
  cursor: pointer;
  z-index: 2;
  grid-area: 1/1/-1/-1;
  color: var(--text-col);
  padding: var(--xs);
  font-variant: small-caps;
}
</style>
