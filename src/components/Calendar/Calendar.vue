<template>
	<div>
		<Row>
	        <Col span="12">
	            <DatePicker type="date" placeholder="Select date"></DatePicker>
	        </Col>
	    </Row>
	</div>
</template>
<style type="text/css">
	
</style>
<script type="text/javascript">
	import {Row,Col,DatePicker} from 'iview'
	export default{
		data(){
			return {

			}
		},
		components:{
			Row,
			Col,
			DatePicker
		},
		created(){
			let params=new URLSearchParams();
			  	params.append('platform',1);
			  	params.append('block_index',0);
			this.$axios.post('https://h5.ele.me/restapi/member/v1/discover',params)
			.then(res=>{
				console.log(res)
			})
			.catch(err=>{
				console.log(err)
			})
		}
	}
</script>