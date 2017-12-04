
<template>

<div>
<span> 文本插值: {{ msg }}</span>
	<span v-once>这个将不会再改变{{ msg }}</span>
</div>
	
</template>


<script>
	var data = { a: 1}
	var vm = new Vue({
		el: '#example',
		data: {
			msg: 'nihao hanxiaocu'
		},

		beforeCreate: function () {

		},

		created: function () {
			//this 指向的是当前的实例
			//=> 箭头函数是和父级上下文绑定在一起的，this 不会是如你所预期的 Vue 实例
			console.log('a is: ' + this.a )
		},

		beforeMounted: function () {

		},

		mounted: function () {

		},

		updated: function () {

		},

		destroyed: function () {

		},

	})

</script>