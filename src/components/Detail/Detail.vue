<template>
    <div>
        <div class="header">
            <nav :style="{backgroundImage:'url('+restaurant.background+')'}" >
                <img :src="restaurant.image_path">
            </nav>
            
        </div>
        
    </div>
</template>
<style lang="scss">
.header nav{
    height: 26.67vw;
    background-size: cover;
    position: relative;
    &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-image: linear-gradient(0deg,hsla(0,0,0,0),rgba(0,0,0,.5));
    }
}
</style>
<script>
    export default {
        data(){
            return {
                restaurant:[],
                food:[]
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$axios(`/api/detail/index?restaurant_id=${to.query.restaurant_id}`)
                .then(res=>{
                    [vm.restaurant,vm.food]=[res.data.restaurant[0],res.data.food]
                    console.log(res)
                })
                .catch(err=>console.log)
            })
        },
        methods:{
            getInfo(){
                
            }
        }
    }
</script>
