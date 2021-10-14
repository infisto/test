<template>
<div class="wrapper">
  <div class="inner">
    <div class="converter-box">
      <p>{{value[0].input}}</p>
      <select v-model="value[0].input">
        <option v-for="item in list" :key="item">{{item.Name}}</option>
      </select>
      <input type="text" v-model.number="value[0].count">
    </div>
    <button @click="reverse">←→</button>
    <div class="converter-box">
      <p>{{value[1].input}}</p>
      <select v-model="value[1].input">
        <option v-for="item in list" :key="item">{{item.Name}}</option>
      </select>
      <p>{{result}}</p>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ICurrency } from '@/interfaces/Interface'

export default defineComponent({
  name: 'currencies',
  data () {
    return {
      value: [
        { input: 'Евро', count: 1 },
        { input: 'Австралийский доллар', count: 1 }
      ]
    }
  },
  methods: {
    reverse ():{input: string, count: number}[] {
      return this.value.reverse()
    }
  },
  computed: {
    list (): [ICurrency] {
      return this.$store.getters.getValues.map((el: ICurrency) => el)
    },
    listCountFrom () : ICurrency[] {
      return this.list.filter((el: ICurrency) => {
        if (el.Name === this.value[0].input) {
          return el.Value
        }
      })
    },
    listCountTo (): ICurrency[] {
      return this.list.filter((el: ICurrency) => {
        if (el.Name === this.value[1].input) {
          return el.Value
        }
      })
    },
    result (): number {
      return ((this.listCountFrom[0].Value / this.listCountTo[0].Value) * this.value[0].count)
    }
  }
})
</script>

<style lang="scss">
.wrapper {
  display: block;
}
.inner {
  display: flex;
}
.converter-box {
  background-color: white;
  border-radius: 10px;
  box-shadow: -1px -1px 20px 0 rgba(34, 60, 80, 0.2);
}
</style>
