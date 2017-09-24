/*
* @Author: 13009
* @Date:   2017-09-06 18:52:42
* @Last Modified by:   13009
* @Last Modified time: 2017-09-13 16:16:50
*/
$(function(){
	//1.侧导航
	/*第一种方法*/
	// $(".slide1").mouseenter(function(){
	// 	$(".item").eq($(this).index()).css("display","block").siblings(".item");
	// });
	// $(".slide1").mouseleave(function(){
	// 	$(".item").eq($(this).index()).css("display","none");
	// });

	/*第二种方法*/
	$(".slide1>a").hover(function(){
		$(".item").css("display","none");
		$(this).next('.item').css("display","block");
	})
	$('.slide').hover(function(){},function(){
		$(".item").css("display","none");
	})


	//2.轮播图
	var num=0;
    let t=setInterval(move, 2000);
    function move(dir="l"){
    	var imgs= $(".banner-box li").length; 
    	if(dir=="l"){
    		num++;        
	        if(num==imgs){
	        	num=0;
	        }
    	}else if(dir=="r"){
    		num--;        
	        if(num==-1){
	        	num=imgs-1;
	        }
    	} 
            	
       
        $(".banner-box li").css({opacity:0.3,zIndex:0 })
        $(".banner-box li:eq("+num+")").animate({
        	opacity:1
        }).css({
        	zIndex:1 ,
        })
        $(".btn>li").css({background: "rgba(0,0,0,0.3)"}).eq(num).css({background:"#ff6700"});
    }
    $(".banner").hover(function(){
    	clearInterval(t)
    },function(){
	    t=setInterval(move, 2000);
    })


    //左按钮
    $(".back").click(function(){
    	move("r");
    })

    //右按钮
    $(".forward").click(function(){
    	move("l");
    })
    

    //轮播组
    $(".btn>li").click(function(){    	  
    	let index=$(this).index(".btn>li") 
    	num=index-1;
		move();		
    })


    $(window).blur(function() {
    	clearInterval(t)
    });
    $(window).focus(function() {
    	t=setInterval(move, 2000);
    });
   

   

    
    //3.搜索框
    $('.nav-right1').click(function(){
    	$('.searchBox').eq(0).css("display","block");
    	$('.nav-right1').eq(0).css({border:'1px solid #ff6700'})
    	$('.nav-right2').eq(0).css({border:'1px solid #ff6700',borderLeft:'0'})
    	$(".nav-right11-box").eq(0).css("display","none");
        $(".nav-right11-box").eq(1).css("display","none");

    })
    $(".nav-right1").blur(function(){
         $('.searchBox').eq(0).css("display","none");
         $('.nav-right1').eq(0).css({border:'1px solid #e0e0e0'})
    	 $('.nav-right2').eq(0).css({border:'1px solid #e0e0e0',borderLeft:'0'})
         $(".nav-right11-box").eq(0).css("display","block");
         $(".nav-right11-box").eq(1).css("display","block");
      
	})


	//购物车
	$(".head-right2").hover(function(){
		$(".carSilde").eq(0).removeClass('carSilde1');
	},function(){
		$(".carSilde").eq(0).addClass('carSilde1');
	})


	//中间导航栏的下拉
	$(".navCenter").hover(function(){
		$(".navItem").css({height:200,borderTop:"1px solid #e0e0e0"})},
	   function(){
			$(".navItem").css({height:0,borderTop:0})
		})
		
	for(let i=0;i<$(".wainav").length;i++){
		$('.wainav').eq(i).hover(function(){
			$(".navItem").css("display","none");
            $(".navItem").eq(i).css({display:"block"})
		})
	}



	//明星单品
	let st=setInterval(sfn,2000);
	let sn=0;
	let sFlag=true;
	var sR=$('.btnR').eq(0)
	var sL=$('.btnL').eq(0)
	var sb=$('.sb');

    sb.hover(function(){
		clearInterval(st);
	},function(){
		st=setInterval(sfn,2000);
	})
   


	sR.click(function(){
		$(this).addClass('disabled');
        sL.removeClass('disabled'); 	                      
        if(sn==1){                   	
	       return;
	    };	        
	       sn++           
	       $(".starBox").css({"marginLeft":`${-1240*sn}px`});
	});
	sL.click(function(){
		$(this).addClass('disabled');

        sR.removeClass('disabled');  
        if(sn==0){
           return
        };
        sn--          
       $(".starBox").css({"marginLeft":`${-1240*sn}px`});
	});
	function sfn(){
		if(sFlag){
	        if(sn==1){
	         	sFlag=false;	         	
	         	return;
	        }
            sn++;        
	        $(".starBox").css({"marginLeft":`${-1240*sn}px`});
	        sR.addClass('disabled');	         
	        sL.addClass('disabled1');
	        sR.removeClass('disabled1');
        }else{
      		if(sn==0){
	         	sFlag=true;	         	
	         	return;
	         }
	         sn-- 
	         $(".starBox").css({"marginLeft":`${-1240*sn}px`});      
	         sR.addClass('disabled1');	
	         sL.removeClass('disabled1');
      	}
	}



	    // 为你推荐
      let recomend=$('.recomend');
      let recomendBox=$('.recomendBox');
      let rlis=$(".recomendBox li")
      let rbtnL=$('.btnL').eq(1);
      let rbtnR=$('.btnR').eq(1);
      let rchildNum=rlis.length;
      let rchildW=rlis[0].offsetWidth+parseInt(getComputedStyle(rlis[0],null).marginRight);
      recomendBox.css({width:`${rchildNum*rchildW}px`});
      let rnum=0;
      let rtarN=0;
   
    
     
      rbtnL.mouseenter(function(){
         rbtnL.addClass('chengse')      	
      })
      rbtnL.mouseleave(function(){ 
         rbtnL.removeClass('chengse')   	      	
      })
       rbtnR.mouseenter(function(){
         rbtnR.addClass('chengse')      	
      })
      rbtnR.mouseleave(function(){ 
         rbtnR.removeClass('chengse')   	      	
      })
       //四屏
       rbtnR.click(function(){
	       rbtnL.removeClass('disabled'); 	                      
            if(rnum==3){
               rbtnR.addClass('disabled');
	           return;
	        };	        
	        rnum++                        
	        recomendBox.css({marginLeft:`${-1240*rnum}px`});
       })
        rbtnL.click(function(){ 	             
	        rbtnR.removeClass('disabled'); 
	        if(rnum==0){
	         rbtnL.addClass('disabled');  	       	 
	         return
	        };
            rnum--                 
            recomendBox.css({marginLeft:`${-1240*rnum}px`});
       }) 


	

	
	
	  // 家具
	 let homeElec=$('.homeElec');
     homeElec.each(i=>{
     	jiaju(homeElec.eq(i));
     })	
	 function jiaju(homeElec){
		  let hItem=homeElec.find('.hItem',).eq(0);
		  let span=hItem.find('span');
		  let homeMain=homeElec.find('.homeMain').eq(0);
		  let homeRbox=homeMain.find('.homeRbox');
		  let hnum=0;
		  span.each(i=>{
			span.eq(i).mouseenter(function(){
					span.eq(hnum).removeClass('hHot');
					homeRbox.eq(hnum).css({display:'none'});
					homeRbox.eq(i).css({display:'block'});		
					span.eq(i).addClass('hHot');	
					hnum=i;			
				})
		  })	  
	 }



	 //内容
	 let neirongBottom=$('.neirong-bottom');
	 let cn=0;
	 let widths=$(".neirongMainBox").width();
	 let nflag=true;	
	 for(let i=0;i<neirongBottom.length;i++){
		neirong(neirongBottom.eq(i));
	 }
	 function neirong(neirongBottom){ 
	   let neirongMainBox=neirongBottom.find(".neirongMainBox");
       let cbtns=neirongBottom.find('.lingbodian-box').children('li');//按钮 
       let cback=neirongBottom.find('.cback');
       let cforward=neirongBottom.find('.cforward');
       cbtns.click(function(){
       	  let i=$(this).index();
       	  cn=i-1;
       	  nfn();
       });

	    function nfn(){
			if(nflag){
		        if(cn==cbtns.length-1){
		         	nflag=false;	         	
		         	return;
		        }
	            cn++;        
		       neirongMainBox.css({"marginLeft":`${-296*cn}px`});
		       cbtns.removeClass('jiaBorder');        
		       cbtns.eq(cn).addClass('jiaBorder');   
	        }else{
	      		if(cn==0){
		         	nflag=true;	         	
		         	return;
		         }
		         cn-- 
		         $(".starBox").css({"marginLeft":`${-1240*sn}px`});      
		         sR.addClass('disabled1');	
		         sL.removeClass('disabled1');
	      	}
		}
		cforward.click(function(){                      
	        if(cn==2){                   	
		       return;
		    };	        
		    cn++ 
		    cbtns.removeClass('jiaBorder');        
		    cbtns.eq(cn).addClass('jiaBorder');             
	        neirongMainBox.css({"marginLeft":`${-296*cn}px`});
		    
		});
		cback.click(function(){	
	        if(cn==0){
	           return
	        };
	        cn--
	        cbtns.removeClass('jiaBorder');        
		    cbtns.eq(cn).addClass('jiaBorder');             
	        neirongMainBox.css({"marginLeft":`${-296*cn}px`});
		});

    }


})
 


	