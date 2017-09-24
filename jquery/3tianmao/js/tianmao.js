/*
* @Author: 13009
* @Date:   2017-08-14 17:25:21
* @Last Modified by:   13009
* @Last Modified time: 2017-09-10 09:35:09
*/

'use strict';
$(function(){
	//侧导航
	$('.outer').hover(function(){
		$(".sitem").css({display:"none"});
		$(this).find('.sitem').css({display:"block"})
	},function(){
		$(".sitem").css({display:"none"});
	})

	//轮播图
	let t=setInterval(move,2000);
	let bimgs=$(".bannerBox>li")
	let n=0;
	$(".banner").hover(function(){clearInterval(t)},function(){
		t=setInterval(move,2000);
	})
	$(".lunbodian-box>li").click(function(){
        let index=$(this).index(".lunbodian-box>li");
        n=index-1;
        move(); 
	})
	function move(dir="r"){
		if(dir=="r"){
			n++;
			if(n==bimgs.length){
	           n=0;
			}
		}else if(dir=="l"){
			n--;
			if(n==-1){
	           n=bimgs.length-1;
			}
		}
		bimgs.css({display:"none"})
		bimgs.eq(n).css({display:"block"})
		$(".lunbodian-box>li").removeClass('lunyifu');
		$(".lunbodian-box>li").eq(n).addClass('lunyifu');
	}

	//我的淘宝。。。下拉
    let zhuan=$('.zhuan');
	for(let i=0;i<zhuan.length;i++){
		ts(zhuan.eq(i));
	}
	function ts(zhuan){		
		let taobaoxiala=zhuan.children('.taobaoxiala');
		zhuan.hover(function(){
			taobaoxiala.eq(0).css({display:'block'});
		},function(){
			taobaoxiala.eq(0).css({display:'none'});
		})
	}

	//手机版下拉
	$('.phoneW').hover(function(){
		$('.phone').css({display:"block"});
	},function(){
        $('.phone').css({display:"none"});
	})
	

	//右固定框	
    $('.gyr').hover(function(){
        $('.gyr').css({background:"#000"});
    	$(this).css({background:"red"});
    	$(this).find(".gtanBox").css({opacity:'1',transform:'translateX(8px)'})
    },function(){
        $('.gyr').css({background:"#000"});
    	$(this).find(".gtanBox").css({transform:'translateX(-16px)',opacity:'0'})
    })

	$('.appLoad').hover(function(){
		$('.gimgBox').css({display:'block'});
	},function(){
		$('.gimgBox').css({display:'none'});
	})


	//滑动事件
	/*左固定框*/
	let sFlag=true;
	let snewarr=[];
	let nowFloat=0;
	let ch=$(window).innerHeight();
	for(let i=0;i<$(".floor").length;i++){
		snewarr.push($(".floor").eq(i).position().top)
	}
   
	$(window).scroll(function(){
		let st=$(document.body).scrollTop();//滚动距离
		$.each(snewarr,function(i,n){

			if(ch+st>=n+300){

		        $(".fli").eq(nowFloat).removeClass('lfyiru');
		        $(".fli").eq(i).addClass('lfyiru');
		        nowFloat=i;
		        $.each($(".fli"),function(index,element){
		        	$(element).click(function(){
		        		$(document.body).scrollTop(snewarr[index]);		        		
		        	})
		        })		       
		    } 
		})


		if($(document.body).scrollTop()<=700){
			$('.xiao-word').css({display:'none'});
	    }else{
	    	$('.xiao-word').css({display:'block'});
	    }


	    //当滑动距离>500px时左固定框，搜索框出现
	    if(st>500){				
		   if(sFlag){
		   	sFlag=false;
		   	$(".huaSearch").animate({top:0});
		   	$(".lfloat").animate({left:2});
		   }
           
		}else{				
		   if(!sFlag){
		   	sFlag=true;
		   	$(".huaSearch").animate({top:-50});
		   	$(".lfloat").animate({left:-36});
		   }
           
		}
	})
	//点击楼层滑动到对应楼层
	$.each($(".fli"),function(index,element){
    	$(element).click(function(){
    		$(document.body).scrollTop(snewarr[index]);
    	})
    })
	//右固定框回顶部
	$(".ttop").click(function(){	
		$(document.body).scrollTop(0)
		$(this).animate({left:-36})
	})
	
})