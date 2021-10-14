<template>
  <div>
    <input type="text" v-model="searchField">
    <transition-group name="list" tag="ul">
      <li v-for="item in findCurrentCurrency" :key="item" class="list-item">
        <p>{{ item.Name }}</p>
        <p>1 {{ item.CharCode }} - {{ item.Value }} RUB
          <span
          :class="calcDiff(item.Value, item.Previous) > 0 ? 'green' : 'red'"
          >{{ calcDiff(item.Value, item.Previous).toFixed(4) }}</span>
        </p>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'currencies',

  data () {
    return {
      searchField: ''
    }
  },
  methods: {},
  computed: {
    findCurrentCurrency () {
      if (!this.searchField) {
        return this.$store.getters.getValues
      } else {
        return this.$store.getters.getValues.filter((el: { CharCode: string | string[]; Name: string | string[] }) => el.CharCode.includes(this.searchField.toUpperCase()) || el.Name.includes(this.searchField))
      }
    },
    calcDiff (): any {
      return (num1: number, num2: number): number => num1 - num2
    }
  },
  watch: {}
})
</script>

<style lang="scss">
ul {
  display: flex;
  flex-direction: column;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 5px;

  &:hover {
    background-color: #e1dbdb;
    cursor: pointer;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(15px);
}

.red {
  color: red;
}

.green {
  color: green;
}
</style>
