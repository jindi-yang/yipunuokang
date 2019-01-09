Vue.component("footerNav",{
	data(){
		return{
			footerData:{
				addressInfo:'<p>地址：安徽省合肥市包河经济开发区繁华大道吉林路东南角联东U谷18号楼</p><p>总机：0551-65358887</p>',
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
				copy:'© 2015-2018  安徽伊普诺康生物技术股份有限公司'
			}
			
			
		}
	},
	template:`
		<div class="footer">
			<div class="contact_info" v-html="footerData.addressInfo"></div>
			<div class="foot_b">
				<ul class="clearfix">
					<li v-for="(item,index) in footerData.footerNav">
						<a href="##">{{item.title}}</a>
					</li>
				</ul>
				<p>{{footerData.copy}}</p>
			</div>				
		</div>
	`
})