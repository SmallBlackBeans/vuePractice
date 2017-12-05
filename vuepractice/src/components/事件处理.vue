<template>
    <div>
        <button v-on:click="warn('from cannot be submitted yet.', $event)">
            Submit
        </button>
        <!-- 事件修饰符 -->
        <a v-on:click.stop="dothis"></a>
        <form v-on:submit.prevent="onsubmit"></form>

        <!-- 串联 -->
        <a v-on:click.stop.prevent="doThat"></a>

        <!-- 添加事件监听器时使用事件捕获模式 -->
        <!-- 即内部元素触发的事件先在此处处理，然后才交由内部元素自身进行处理 -->
        <div v-on:click.capture="doThis">...</div>

        <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
        <!-- 即事件不是从内部元素触发的 -->
        <div v-on:click.self="doThat">...</div>

        <!-- 点击事件将只会触发一次 -->
        <a v-on:click.once="doThis"></a>

        <!-- 按键修饰符 -->
        <!-- 只有在 `keyCode` 是 13 时调用 `vm.submit()` -->
        <input v-on:keyup.13="submit">
        <!-- 同上 -->
        <input v-on:keyup.enter="submit">

        <!-- 缩写语法 -->
        <input @keyup.enter="submit">

        <!-- Ctrl + Click -->
        <div @click.ctrl="doSomething">Do something</div>

        <!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
        <button @click.ctrl="onClick">A</button>

        <!-- 仅在只有 Ctrl 被按下的时候触发 -->
        <button @click.ctrl.exact="onCtrlClick">A</button>
    </div>
</template>
<script>
// 可以使用 `v-on:keyup.f1`
Vue.config.keyCodes.f1 = 112;
export default {
  methods: {
    warn(message, event) {
      // 现在我们可以访问原生事件对象
      if (event) event.preventDefault();
      alert(message);
    }
  }
};
</script>
