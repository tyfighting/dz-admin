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
      this.getMusic();
    },
    methods:{
      setNewsApi() {
        this.$axios.post('/news/index', 'type=top&key=123456')
        .then(res => {
          console.log(res);
          this.newsListShow = res.articles;
        });      
      },
      getMusic(){
        this.$axios.get('https://music.163.com/weapi/cdns?csrf_token=')
        .then((res)=>{
          console.log(res)
        })
        .catch((err)=>{
          console.log(err)
        })
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