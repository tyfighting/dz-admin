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
      this.getGitHub();
      this.getVip();
      this.getMain();
    },
    methods:{
      setNewsApi() {
        let params=new URLSearchParams();
		  	params.append('username','zhangyaqi');
        params.append('mobile','13271508702');
        this.$axios.get('/api/user/addUser')
        .then(res => {
          console.log(res)
        });      
      },
      getGitHub(){
        this.$axios.get('https://api.github.com/users/ruanyf')
        .then((res)=>{
          // console.log(res)
        })
        .catch((err)=>{
          // console.log(err)
        })
      },
      getVip(){        
        // http://route.showapi.com/819-1
        // showapi_appid:'96393',
        // showapi_sign:'63bf61d9d3bb402d948d6040dc9ad6e9'
        let params=new URLSearchParams();
		  	params.append('showapi_appid','96393');
        params.append('showapi_sign','63bf61d9d3bb402d948d6040dc9ad6e9');
        this.$axios.post('http://route.showapi.com/819-1',params)
        .then(res=>{
          // console.log(res)
        })
        .catch(err=>{
          // console.log(err)
        })
      },
      getMain(){
        this.$axios.get('http://47.94.21.122:8080/main')
        .then(res=>{
          // console.log(res);
        })
        .catch(err=>{
          // console.log(err)
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