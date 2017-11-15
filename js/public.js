/*
* @Author: asus
* @Date:   2017-08-05 12:04:19
* @Last Modified by:   asus
* @Last Modified time: 2017-08-11 11:15:55
*/

/*'use strict';*/
$(function(){
	var timer;
	var num=0;
	function aa(){
		clearInterval(timer);
		timer=setInterval(function(){
			num+=1;
			if(num>4){
				num=0;
			}
			$('.banner ul').css('left', -1366*num+'px');
			$('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');
		},500)
	}
	aa();
	$('.banner').hover(function() {
		clearInterval(timer);
	}, function() {
		aa();
	});
	$('.banner ol li').click(function(event) {
		var num=$(this).index('.banner ol li');
		$('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');
		$('.banner ul').css('left', -1366*num+'px');
	});
	
})
