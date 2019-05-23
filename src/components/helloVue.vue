<template>
  <div>
    <div class="index">mock数据</div>
    <ul>
      <li></li>
    </ul>
  </div>
</template>
 
<script> 
export default {
  data () {
    return {
      newsListShow: [],
    }
  },
  created() {
    this.setNewsApi();
    this.getOrder();
  },
  methods:{
    setNewsApi() {
      this.$axios.post('/news/index', 'type=top&key=123456')
      .then(res => {
        console.log(res);
        this.newsListShow = res.articles;
      });      
    },
    getOrder(){
      this.$axios.get('/user/order')
      .then(res => {
        console.log(res);
        this.newsListShow = res.articles;
      });
    }
  }
}
</script>
<style scoped>
  .index{
    padding:20px;
    font-size: 18px;
  }
</style>