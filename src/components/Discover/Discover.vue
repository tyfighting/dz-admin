 <template>
	<div>
		<Row class="discover-top">
	        <Col span="12" class="discover-left">
	        	<p class="orange">金币商城</p>
	        	<p><span>0元好物在这里</span></p>
	        	<div>
	        		<img :src="discover[0]" alt="">
	        	</div>
	        </Col>
	        <Col span="12" class="discover-right">
	        	<Row>
	        		<Col span="15">
						<p class="blue">推荐有奖</p>
			        	<p><span>20元现金拿不停</span></p>
			        </Col>
		        	<Col span="9">
		        		<img :src="discover[1]" alt="">
		        	</Col>
		        </Row>
		        <Row>
		        	<Col span="15">
			        	<p class="pink">周边优惠</p>
			        	<p><span>领取口碑好券</span></p>
		        	</Col>
		        	<Col span="9">
		        		<img :src="discover[2]" alt="">
		        	</Col>
		        </Row>
	        </Col>
	    </Row>
		<discoverFood :foodList=discoverFood></discoverFood>
		<Footer></Footer>
	</div>
</template>
<style type="text/css" scoped>
	.discover-top{
		background:#fff;
	}
	.discover-top p{
		font-size:16px;
	}
	.discover-top p span{
		font-size:14px;
		color: #999;
	}
	.discover-left{
		padding: 19px 10px 8px 20px;
	}
	.discover-left div{
		text-align:right;
		margin-top: 10px;
	}
	.discover-top .ivu-row{
		padding: 15px 10px;
	}
	.discover-top img{
		width: 40%
	}
	.ivu-col-span-9{
		margin-top: 5px;
	}
	.discover-right{
		border-left:1px solid #ddd;
	}
	.discover-right .ivu-row:first-child{
		border-bottom:1px solid #ddd;
	}
	.discover-right .ivu-col-span-15,.discover-left p{
		text-align: left;
	}
	.discover-right img{
		width: 60%
	}
	.discover-top .orange{
		color: #ff9900;
	}
	.discover-top .blue{
		color: #1ba9e1;
	}
	.discover-top .pink{
		color: #ed6660;
	}
</style>
<script type="text/javascript">
	import discover1 from '../../assets/discover1.jpeg'
	import discover2 from '../../assets/discover2.jpeg'
	import discover3 from '../../assets/discover3.jpeg'
	import discoverFood from './discoverFood'
	import Footer from '../Common/Footer'
	import {Row,Col} from 'iview'
	export default{
		data(){
			return {
				discover:[discover1,discover2,discover3],
				discoverFood:null
			}
		},
		created(){
			this.$axios.get("../../static/json/discover.json")
			.then(res=>{
				this.discoverFood=res.data.items;
			})
			.catch(err=>{
				console.log(err);
			})
		},
		components:{
			discoverFood,
			Footer,
			Row,
			Col
		}
	}
	
</script>