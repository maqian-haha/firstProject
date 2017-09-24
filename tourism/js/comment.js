window.addEventListener("load",function(){
    var texta=document.querySelector('textarea');
    var maxL=texta.maxLength;
    var tipAll=document.querySelector('.tipAll');
    var btn=document.querySelector('.tip>button');
    var content=document.querySelector('.cItem');
    texta.onkeyup=function(){
        let val=this.value;
        tipAll.innerText=`${maxL-val.length}`;
    }
    var n=4;
    btn.onclick=texta.onkeydown=function(e){
        if(e.type=='click'){
            fn.call(texta);
        }else if(e.type=='keydown'){
            if(e.shiftKey && e.keyCode==13){
                fn.call(texta);
            }
        }
        function fn(){
            //文本域保存后清空
            let val=this.value;
            this.value='';
            let lis=document.createElement('li');
            lis.innerHTML=`
        		  <a href=""><img src="img/men2.jpg" alt=""></a>
        		  <div class="fayan">
        		  	 <div class="name">学不会伪装</div>
        		  	 <p class='xuxian'><span>YIQIEYIKEHUWEIZHONGXIN</span></p>
        		  	 <p class='fynei'>${val}</p>
        		  	 <p class="jilu">
        		  	 	<span class="iconfont icon-shijian">&nbsp;2017.9.10</span>
        		  	 	<span class="iconfont icon-dianzanmw">&nbsp;66666</span>
        		  	 </p>
        		  </div> 
        		  <div class="lou"><span>0${++n}</span><span>/</span><span>楼</span></div>      
        		`;
            console.log(lis)
            console.log(content)
            content.appendChild(lis);
        }
    }
})