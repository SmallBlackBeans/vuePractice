<template>
  <div class="hello">
    <h1> {{msg}}</h1>
    <button v-on:click="onClickMe">click!</button>
  </div>
</template>
<script>
import Header from "./header";
export default {
  data: function() {
    return {
      title: "this is a title"
    };
  },
  methods: {
    test(ni, nihoa) {}
  }
};
</script>
