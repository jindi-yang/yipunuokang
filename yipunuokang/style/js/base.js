//scroll滚动
//$(window).scroll(function() {
//	var topScroll = $(window).scrollTop()
//
//	if(topScroll > 50) {
//		$('.fix-nav').addClass('on');
//
//	} else {
//		$('.fix-nav').removeClass('on');
//
//	}
//})
//
//$(".top-menu li").click(function() {
//	$(this).addClass("active").siblings().removeClass("active")
//})

$(function() {
	var scrolltop_value;
	var nav_a_num = $('.top-menu li').length;
	//console.log("num"+nav_a_num)
	if($('.top-menu li').length > 0) {
		var inside_nav_top = $('.top-menu').offset().top;
		$(window).scroll(function() {
			scrolltop_value = $(document).scrollTop();
			if(scrolltop_value >= inside_nav_top) {
				$('.fix-nav').addClass('on');
				for(var i = 0; i < nav_a_num; i++) {
					if($('.nav-part').eq(i).attr('offsetTop') < scrolltop_value + 120) {
						$('.top-menu li').eq(i).addClass('active').siblings().removeClass('active');
					};
				};
			} else {
				$('.fix-nav').removeClass('on');
			};
		});
	};
	$('.nav-part').each(function() {
		$(this).attr('offsetTop', $(this).offset().top);
	});
	$('.top-menu li').click(function() {
		var top_nav_index = $(this).index();
		$('.top-menu li').eq(top_nav_index).addClass('active').siblings().removeClass('active');
		var part_top = $('.nav-part').eq(top_nav_index).offset().top - 115;
		$('html body').animate({
			'scrollTop': part_top
		}, 200);
	});
})