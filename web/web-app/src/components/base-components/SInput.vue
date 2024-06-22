<template>
  <div class="input-container">
    <div v-if="$slots.prepend" class="prepend-icon">
      <slot name="prepend" />
    </div>
    <div class="field-control">
<!--      TODO - megoldani egy normálisan kinéző labelt-->
<!--      <div class="label">{{ label }}</div>-->

      <input
          :placeholder="placeholder"
          :style="label !== null && 'padding-top: 1px'"
          class="empty-input"
          :type="type"
          v-model="value"
      >
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

defineProps({
  type: {type: String, default:'text'},
  label: {type: String, default:null},
  placeholder: {type: String, default: ''}
})

const value = ref('')
</script>

<style scoped>
.input-container{
  border-radius: var(--border-radius-sm);
  display: flex;
  align-items: center;
  padding: var(--xs);
  transition-duration: .3s;
  box-shadow: var(--elevated);
  border: 1px solid transparent;
  background: var(--secondary);
}
.input-container:focus-within{
  transition-duration: .3s;
  border: 1px solid var(--focused);
}

.empty-input{
  z-index: 1;
  width: 100%;
  min-width: 0;
  outline: 0;
  -webkit-user-select: auto;
  user-select: auto;
  padding: var(--xs) 0;
  background: none;
  color: #ffffff;
  border: none;
}
.field-control{
  width: 100%;
}
.prepend-icon{
  margin-right: var(--xs);
  display: flex;
  align-items: center;
}
.label{
  z-index: 2;
  width: min-content;
  height: min-content;
}
</style>
