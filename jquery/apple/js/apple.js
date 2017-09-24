/*
* @Author: 13009
* @Date:   2017-08-27 08:28:41
* @Last Modified by:   13009
* @Last Modified time: 2017-09-17 14:54:58
*/
$(function(){
	let t=setInterval(fn, 2000);
	let n=0;
	function fn(dir="r"){
	  if(dir=="r"){
        n++;
	    if(n==$(".banner>li").length){
	      	n=0
        }
	  }else if(dir=="l"){
	  	n--;
	  	if(n==-1){
	  		n=$(".banner>li").length-1;
	  	}
	  }
	  $(".banner>li").css({"display":"none"});
	  $(".banner>li").eq(n).css({"display":"block"});
	  $(".lunbotiao>li").removeClass('hot');
      $(".lunbotiao>li").eq(n).addClass('hot');
	}
	$(".bannerBox").hover(function(){
		clearInterval(t)
	},function(){
		t=setInterval(fn, 2000);
	})
	$(".back").click(function(){
		fn("r");
	});
	$(".forward").click(function(){
		fn("l");
	});
    
 
  
   
     
   

 
})