<!-- by 韩小醋 -->
<template>
  <div>
    <h1>niaho</h1>
    <div>
      <ul>
        <li>ni</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
export default {
  data() {
    return {
      goodsList: [],
      sortFlag: true,
      page: 1,
      pageSize: 10
    };
  },
  mounted() {
    this.getGoodsList();
  },
  components: {},
  methods: {
    getGoodsList() {
      //跨域需要代理 在 config/index.js中
      var params = {
        page: this.page,
        pageSize: this.pageSize,
        sort: this.sortFlag ? 1 : -1
      };
      axios
        .get('/goods', {
          params: params
        })
        .then(response => {
          let res = response.data;
          if (res.status == '0') {
            this.goodsList = res.result;
          } else {
            this.goodsList = [];
          }
        });
    },
    sortGoods() {
      this.sortFlag = !this.sortFlag;
      this.getGoodsList();
    }
  }
};
</script>