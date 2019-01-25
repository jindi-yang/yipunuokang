Vue.component("footerNav",{
	data(){
		return{
			footerData:{
				addressInfo:'<h3>联系我们</h3><p>地址：安徽省合肥市包河经济开发区繁华大道吉林路东南角联东U谷18号楼</p><p>商务专线：63428255</p><p>技术服务：0551-65358887</p><p>传真：0551-63428055</p><p>邮箱：iprocom@epnk.cn</p>',
				footerNav:[
					{
						id:1,
						title:'产品与服务'
					},
					{
						id:2,
						title:'公司简介'
					},
					{
						id:3,
						title:'联系我们'
					}
				],
				serviceTel:'400-0551-795',
				wechat:'style/images/weixin.png',
				word:'<span>关注微信公众号</span><span>实时获取产品信息</span>',
				copy:'© 2015-2018  安徽伊普诺康生物技术股份有限公司'
			}
			
			
		}
	},
	template:`
		<div class="footer">
			<div class="top">
				<div class="contact_info" v-html="footerData.addressInfo"></div>
				<div class="wechat">
					<img :src="footerData.wechat" style="width:80px">
					<div v-html="footerData.word"></div>
				</div>
				<div class="service-tel">服务热线：{{footerData.serviceTel}}</div>
			</div>
			<div class="foot_b">
				<p>{{footerData.copy}}</p>
			</div>				
		</div>
	`
})