<template>
  <div id="helloworld">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h1 style="line-height: 36px; color: #20A0FF">豆瓣电影排行榜</h1>
      </div>
      <div v-for="item in items" :key="item.title" class="text item">
        <router-link to="/detail"> {{item.title}}</router-link>
        <button @click="jump(item.title)">go</button>
      </div>
    </el-card>
  </div>
</template>
<script>
import Rource from 'vue-resource'
export default {
  data() {
    return {
      items: []
    }
  },
  mounted() {
    console.log('mounted')
    this.$http
      .jsonp(
        'https://api.douban.com/v2/movie/top250?count=10',
        {},
        {
          headers: {},
          emulateJSON: true
        }
      )
      .then(response => {
        this.items = response.data.subjects
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    jump(title) {
      this.$router.push('/detail?title=' + title)
    }
  }
}
</script>


<style>
h1 {
  color: cyan;
}
</style>
