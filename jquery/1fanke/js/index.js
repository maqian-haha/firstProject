/*
* @Author: 13009
* @Date:   2017-08-12 15:29:03
* @Last Modified by:   13009
* @Last Modified time: 2017-09-09 19:04:04
*/

'use strict';
$(function(){
	//中间导航
	let navBoxRights=$('.navEbox');
	let item=$('.item');
	let narr=[];
	let narrh=[];
	for(let i=0;i<item.length;i++){
		narr.push($('li',item[i]));
	}
	for(let i=0;i<narr.length;i++){
		narrh.push(narr[i].length*30);
	}
	for(let i=1;i<navBoxRights.length;i++){
		navBoxRights.eq(i).hover(function(){
           $(".item").eq(i-1).css({
            height:`${narrh[i-1]}px`,borderBottom:'1px solid #888888',
            borderTop:'6px solid #b81c22'
           })         
		},function(){
           $(".item").eq(i-1).css({ height:0,borderBottom:0, borderTop:0})
    })	
	}


	//banner
	let t=setInterval(move,2000);
  let bimgs=$(".banner>li")
  let n=0;
  $(".banner-box").hover(function(){clearInterval(t)},function(){
    t=setInterval(move,2000);
  })
  $(".btn>li").click(function(){
        let index=$(this).index(".btn>li");
        n=index-1;
        move(); 
  })
  $(".back").click(function(){
      move('l')
  })
  $(".forward").click(function(){
      move('r')
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
    $(".btn>li").removeClass('lunyifu');
    $(".btn>li").eq(n).addClass('lunyifu');
  }



	//微信
	$('.weixin').hover(function(){
    $('.ewmA').css({display:"block"})
  },function(){
    $('.ewmA').css({display:"none"})
  })
    
  //搜索
  $('input').click(function(){
    $(this).attr("placeholder","")
  })
  

})