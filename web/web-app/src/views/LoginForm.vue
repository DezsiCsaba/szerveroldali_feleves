<template>
  <div class="s-page">
    <div
        class="s-card"
        style="padding: var(--md) var(--md)"
    >
      <form class="s-form">
        <div style="display: flex; justify-content: center">
          <h3> WELCOME BACK </h3>
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
            type="password"
            placeholder="Password"
        >
          <template v-slot:prepend>
            <img class="icon-prepend" src="../../public/favicon.ico"/>
          </template>
        </s-input>


        <s-btn
            style="margin:var(--sm) 0"
            label="bejelentkezés"
            color="positive"
            @click="loginProcess"
        />
        <s-btn
            style="margin:var(--sm) 0"
            label="folytatás bejelentkezés nélkül"
            color="positive"
            @click="continueWithoutLogin"
        />
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

const loginProcess = ()=>{
  console.log('Login..')
  mainStore.setGuest(false)
  router.push('/main')
}
const continueWithoutLogin = ()=>{
  console.log('No login..')
  mainStore.setGuest(true)
  router.push('/main')
}

</script>
