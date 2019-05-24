<template>
  <div>
    <div class="index">mock数据</div>
  </div>
</template> 
<script>
  export default{
    data () {
      return {
        newsListShow: [],
      }
    },
    created() {
      this.setNewsApi();
    },
    methods:{
      setNewsApi() {
        this.$axios.post('/news/index', 'type=top&key=123456')
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