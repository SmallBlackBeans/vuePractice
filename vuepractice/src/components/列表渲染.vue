<template>
  <div>
    <ul id="v-for-object" class="demo">
      <!-- 给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性 -->
      <li v-for="(value, key, index) in object" :key="key">
        {{ index }}. {{ key }}: {{ value }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [{ message: "foo" }, { message: "bar" }],
      object: {
        firstName: "John",
        lastName: "Doe",
        age: 30
      }
    };
  },
  methods: {}
};
</script>
