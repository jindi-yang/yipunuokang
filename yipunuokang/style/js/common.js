$(function() {
	
	//搜索

	$(".search-txt").css({"width":0, "opacity":0})
	$(".search-icon").click(function(){
		$(this).css({"display":"none"});
		$(".search-txt").css({"display":"block"})
		$(".search-btn").css({"display":"block"})
		$(".search-txt").stop().animate({ "width":"200px", "opacity":1},400,function(){
			$(".search-txt").find("input").focus()
		})
	})
	
	$(".menu li").hover(function() {
		$('.sub-nav').stop(true).fadeIn(300);
		$('.sub-nav-list').removeClass('on');
		var n = $(this).index();
		console.log(n)
		$(".menu li").find("a").removeClass("on")
		$(this).find("a").addClass("on")
		$('.sub-nav-list').eq(n).addClass('on');
	}, function() {

	})

	$(".header").hover(function() {

	}, function() {
		$('.sub-nav').stop(true).fadeOut(300);
		$('.sub-nav-list').removeClass('on');
		$(".menu li a").removeClass("on")
		$(".search-txt").css("display","none")
		$(".search-icon").css("display","block")
	})
	
	
	
	
	
	
	
	
})



//scroll滚动
$(window).scroll(function() {
	var topScroll = $(window).scrollTop()

	if(topScroll > 50) {
		$('.header').addClass('on');
		$(".search-icon").css({"display":"block"});
		$(".search-txt").css({"width":0, "opacity":0})

	} else {
		$('.header').removeClass('on');
		


	}
})