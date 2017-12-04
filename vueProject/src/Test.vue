
/** 
    计算属性带有缓存，如果你不希望有缓存，请用方法来替代
*/

<template>
    <div id='demo'>
        {{ fullname }}
        <h1>Title</h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </div>
    <div v-if="Math.random() > 0.5">
        Now you see
    </div>
    <div v-else>
        now you don't
    </div>

</template>






<style>

</style>


<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'xxxx'
    },
    watch: {
        question: function () {
            this.answer = 'x,,,,dd',
            this.getAnswer()
        }
    },
    methods: {
        a: function() {
            
        }
    }
})

    var vm = new Vue({
  el: '#demo'
  data: {
    firstname: 'han',
    lastName: 'chenghai'
  },
  computed: {
    fullname: function () {
      reture this.firstname + ' ' + this.lastName
    }
  }

});
export default {
  computed: {
    fullname: {
    get: function() {},
      set: function(newValue) {
        var names = newValue.spilt(' ')
        this.firstname = names[0]
        this.lastName = names[1]
      }
    }
  }
};
</script>

