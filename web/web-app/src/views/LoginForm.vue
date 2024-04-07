<script setup>

import SInput from "@/components/base-components/SInput.vue";
import SBtn from "@/components/base-components/SBtn.vue";
</script>

<template>
  <div class="s-page">
    <div
        class="s-card"
        style="padding: var(--md) var(--md)"
    >
      <form
          style="width: 500px"
          class="s-form"
      >
        <div style="display: flex; justify-content: center">
          <h3> WELCOME </h3>
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
            style="margin:var(--md) 0"
            label="log-in"
            color="positive"
        />
      </form>
    </div>

  </div>
</template>

<style scoped>

</style>
