<template>
  <div id="counter-event-example">
    <p>{{ total }}</p>
    <button-counter v-on:increment="incrementTotal"></button-counter>
    <button-counter v-on:increment="incrementTotal"></button-counter>
  </div>
</template>
<script type="text/javascript">
import Vue from 'vue'
Vue.component('button-counter', {
  template: '<button v-on:click="incrementCounter">{{ counter }} </button>'
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter() {
      this.counter += 1
      this.$emit(increment)
    }
  },
})

new Vue({
  el: '#counter-event-example'
  data: {
    total: 0
  },
  methods: {
    incrementTotal() {
      this.total += 1
    }
  }
})

</script>
