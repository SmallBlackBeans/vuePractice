<template>
  <!-- <input v-model: "message" placeholder="edit me"> -->
  <div>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line"> {{ message }}</p>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
    <br>
    <!-- 单选框 -->
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    <!-- 复选框 -->
    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <!-- 单选按钮 -->
    <div id="example-4">
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>
    <!-- 选择列表 -->
    <div id="example-5">
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
    <!-- 多选列表 -->
    <div id="example-6">
      <select v-model="selected" multiple style="width: 50px;">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br>
      <span>Selected: {{ selected }}</span>
    </div>
    <!-- 动态填充 -->
    <div>
      <select name="动态填充" id="selectDynamic" v-model="selecteDyn">
        <option v-for="option in options" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
      <span>Selected: {{ selecteDyn }}</span>
    </div>
    <!-- lazy -->
    <div>
      <!-- 在 "change" 而不是 "input" 事件中更新 -->
      <input type="text" v-model.lazy="msg">
      <span>{{ msg }}</span>
      <br/>
      <br/>
      <input type="number" v-model.number="age">
      <span>{{ age }}</span>
      <br>
      <!-- 自动过滤用户输入的首尾空格 -->
      <input v-model.trim="msg">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'nihao',
      checked: true,
      checkedNames: [],
      selected: '',
      picked: '',
      selectes: [],
      selecteDyn: 'a',
      options: [{
          text: 'one',
          value: 'a'
        },
        {
          text: 'two',
          value: 'b'
        },
        {
          text: 'three',
          value: "c"
        }
      ]
    }
  },
  methods: {

  }
}

</script>
