<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body,p,ul,li,h3{
  margin: 0;
  padding: 0;
}
html,body{
  background-color: #f5f5f5;
} 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a,a:active,a:visited,a:active{
  display: block; 
  outline: none;  
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;/*去掉点击高亮效果*/
}
ul,li{
  list-style: none;
}
.modal_footer{
  padding: 10px 0;
  text-align: center;
}
.modal_footer button{
  width: 80%;
}
</style>
