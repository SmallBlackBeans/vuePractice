<template>
  <div>
    <h1>hanxiaocu</h1>
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
    <!-- 
      v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
      v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
      相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
      一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
     -->
    <div v-show="ok">hello!</div>
    <div>
      <ul id="v-for-object" class="demo">
        <!-- 给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性 -->
        <li v-for="(value, key, index) in object" :key="key">
          {{ index }}. {{ key }}: {{ value }}
        </li>
      </ul>
      <div>
        <!-- v-for 的优先级比 v-if 更高 -->
        <span v-for="(value,index) in 10" v-bind:key="index">{{ value }}</span>
      </div>
    </div>
  </div>
</template>
<!-- <template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template> -->
<script>
export default {
  data() {
    return {
      type: "B",
      loginType: "uername",
      ok: true
    };
  },
  methods: {}
};
</script>
