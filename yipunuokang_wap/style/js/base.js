Vue.component("menuBar",{
	data(){
		return{
			boxShadowStyle:false,
			closeIcon:false,
			show:false,
			menuBar:[
				{
					id:1,
					jumpLink:'index.html',
					navTitle:'首页',
					hasSecond:false
				},
				{
					id:2,
					jumpLink:'',
					navTitle:'产品与服务',
					hasSecond:false,
					secondNav:[
						{
							id:21,
							links:'product.html',
							title:'系列产品',								
						},
						{
							id:22,
							links:'product.html',
							title:'特色产品',								
						},
						{
							id:23,
							links:'product.html',
							title:'新品推荐',								
						},
						{
							id:24,
							links:'product.html',
							title:'品质管理',								
						}
					]
				},
				{
					id:3,
					jumpLink:'',
					navTitle:'公司简介',
					hasSecond:false,
					secondNav:[
						{
							id:31,
							links:'company_info.html',
							title:'企业概括',								
						},
						{
							id:32,
							links:'culture.html',
							title:'企业文化',
						},
						{
							id:33,
							links:'develop.html',
							title:'发展历程',								
						},
						{
							id:34,
							links:'honor.html',
							title:'企业荣誉',								
						}
					]
				},
				{
					id:4,
					jumpLink:'',
					navTitle:'新闻中心',
					hasSecond:false,
					secondNav:[
						{
							id:31,
							links:'news.html',
							title:'公司新闻',								
						},
						{
							id:32,
							links:'news.html',
							title:'行业资讯',								
						},
						{
							id:33,
							links:'news.html',
							title:'会展资讯',								
						},
						{
							id:34,
							links:'news.html',
							title:'文献汇编',								
						}
					]
				},
				{
					id:5,
					jumpLink:'',
					navTitle:'人力资源',
					hasSecond:false,
					secondNav:[
						{
							id:31,
							links:'recruit.html',
							title:'人才理念',								
						},
						{
							id:32,
							links:'recruit.html',
							title:'职业发展',								
						},
						{
							id:33,
							links:'recruit.html',
							title:'福利待遇',								
						},
						{
							id:34,
							links:'recruit.html',
							title:'人才招聘',								
						}
					]
				},
				{
					id:6,
					jumpLink:'contact.html',
					navTitle:'联系我们',
					hasSecond:false
				}
			]
		}
	},
//  props:{//这里是组件可以接受的参数，也就是相当于面向原型写组件时的配置参数，用户可以传递不同参数，自己定义组件
//      cardTitle:{//卡片标题
//          type:String,
//          default:'这是一个卡片'
//      },
//      list:{//列表内容
//          type:Array,
//          default:[]
//      }
//  },
    template:`
        <div class="top">
			<div class="header" :class="boxShadowStyle ? 'boxShadowStyle':''">
				<div class="logo">
					<a href=""><img src="style/images/logo.png"></a>
				</div>
				<div class="nav_btn" @click="showNav()" :class="closeIcon ? 'close' : '' "></div>
			</div>
			<transition name ="fade">
				<div class="nav_show" v-show="show">
					<ul>
						<li v-for="(item,index) in menuBar" :key="index" v-if="item.secondNav==undefined">
							<a :href="item.jumpLink">{{item.navTitle}}</a>
						</li>
						<li v-for="(item,indexs) in menuBar" :key="indexs" v-if="item.secondNav!= undefined">
							<span :class= "item.secondNav!=undefined?'selectArrow':''" @click="selectSecond(indexs)">{{item.navTitle}}</span>
							<ul v-if="item.hasSecond == true">
								<li v-for="(second,index) in item.secondNav">
									<a :href="second.links">{{second.title}}</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</transition>
		</div>
    `,
    methods:{//这里定义的组件的方法，利用$emit()进行父子组件通信，子组件通过点击事件告诉父组件触发一个自定义事件，$emit()方法第二个参数也可以用来传递数据
        showNav(){
        	this.boxShadowStyle = false
			this.closeIcon = !this.closeIcon
			this.show = !this.show
		},
		selectSecond(index){
			console.log(index)
			this.menuBar[index].hasSecond = !this.menuBar[index].hasSecond					
		},
		handleScroll(){
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			//console.log(scrollTop)
			if(scrollTop > 100){
				this.boxShadowStyle = true
			}else{
				this.boxShadowStyle = false
			}
		}
    },
    mounted:function(){
		window.addEventListener('scroll', this.handleScroll)
	}
});