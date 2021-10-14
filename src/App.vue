<template>
  <div id="nav">
    <nav>
      <router-link to="/" exact>Currencies</router-link>
      <router-link to="/converter">Converter</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { fromObjectToArray } from '@/functions/functions'

export default defineComponent({
  name: 'app',
  async mounted () {
    const { Valute } = await fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(response => response.json())
    this.$store.commit('setCurrencies', fromObjectToArray(Valute))
  }
})
</script>

<style lang="scss">

</style>
