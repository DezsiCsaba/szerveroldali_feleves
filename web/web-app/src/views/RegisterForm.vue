<template>
  <div class="s-page">
    <div
        class="s-card"
        style="padding: var(--md) var(--md)"
    >
      <form class="s-form">
        <div style="display: flex; justify-content: center">
          <h3> REGISTER YOUR NEW ACCOUNT </h3>
        </div>
        <s-input
            style="margin:var(--md) 0"
            label="asd"
            placeholder="Username"
        >
          <template v-slot:prepend>
            <img class="icon-prepend" src="../../public/favicon.ico"/>
          </template>
        </s-input>

        <s-input
            style="margin:var(--md) 0"
            label="asd"
            placeholder="Password"
            type="password"
        >
          <template v-slot:prepend>
            <img class="icon-prepend" src="../../public/favicon.ico"/>
          </template>
        </s-input>

        <s-btn
            style="margin:var(--sm) 0"
            label="regisztrálás"
            color="positive"
            @click="registerProcess"
        />

        <a href="/login">Already have an account?</a>
      </form>
    </div>
  </div>
</template>

<script setup>

import SInput from "@/components/base-components/SInput.vue";
import SBtn from "@/components/base-components/SBtn.vue";
import router from "@/router/index.js";
import { useMainStore } from '@/stores/mainStore.js'

const mainStore = useMainStore()
const registerProcess = ()=>{
  console.log('Register..')
  router.push('/login')
}
</script>

<style scoped>

</style>
