/*
* @Author: 13009
* @Date:   2017-08-23 09:05:04
* @Last Modified by:   13009
* @Last Modified time: 2017-08-24 08:59:11
*/
/*
属性：（用来描述）
   哪些字符  
   个数  
   速度  
   得分  
   关卡  
   生命  
   减分
方法：
   开始 产生字符(geshu)-->
   消除
   产生字符
       个数
       哪些
   下一关
   重新开始

 */
function Game(){
   this.charSheet=[
   ['Q','img/Q.png'],
   ['W','img/w.png'],
   ['E','img/E.png'],
   ['R','img/R.png'],
   ['T','img/T.png'],
   ['Y','img/Y.png'],
   ['U','img/U.png'],
   ['I','img/I.png'],
   ['O','img/O.png'],
   ['P','img/P.png'],
   ['A','img/A.png'],
   ['S','img/S.png'],
   ['D','img/D.png'],
   ['F','img/F.png'],
   ['G','img/G.png'],
   ['H','img/H.png'],
   ['J','img/J.png'],
   ['K','img/K.png'],
   ['L','img/L.png'],
   ['Z','img/Z.png'],
   ['X','img/X.png'],
   ['C','img/C.png'],
   ['V','img/V.png'],
   ['B','img/B.png'],
   ['N','img/N.png'],
   ['M','img/M.png']]
   this.length=5;
   this.elements=[];
   this.position=[];
   this.speed=10;
   this.scoreObj=document.querySelector("div.score>span");
   this.lifeObj=document.querySelector("div.life>span");
   this.nowObj=document.querySelector("div.now>span")
   this.score=0;
   this.life=10;
   this.gq=10;
   this.now=1;
}
Game.prototype={
	start:function(){
		this.getChars(this.length);
		this.drop();
		this.key();
	},
	getChars:function(length){
		for(let i=0;i<length;i++){
			this.getChar();			
		}
	},
	checkRepeat:function(num){
		// num  this.charSheet[num]
		// this.elements[i].innerText
		let that=this;
		return this.elements.some(function(value){
			 return value.innerText==that.charSheet[num][0];
		})
		 // return this.elements.some(value=>value.innerText==this.charSheet[num])									
	},
	checkPosition:function(lefts){
		return this.position.some(function(value){
			// console.log(value.left)
			return Math.abs(lefts-value)<50;
		})
	},
    getChar:function(){
    	/*
    	num--->div.innerText
    	 */
    	// 产生一个随机下标
    	let num;
        // let num=Math.floor(Math.random()*this.charSheet.length);
        let divs=document.createElement('div');
        let tops=Math.random()*100;
        let lefts;

        do{
           num=Math.floor(Math.random()*this.charSheet.length);
        }while(this.checkRepeat(num))

        do{
           lefts=Math.random()*(innerWidth-400)+200;
        }while(this.checkPosition(lefts))
        // 设置样式
        divs.classList.add('char');
        // 设置内容
        divs.innerText=this.charSheet[num][0];
        // 位置随机
        divs.style.cssText=`
          left:${lefts}px;top:${tops}px;
          background-image:url(${this.charSheet[num][1]});
        `;
        document.body.appendChild(divs);
        this.elements.push(divs);
        this.position.push(lefts);
    }, 
    drop:function(){
      let that=this;
      // console.log(this);//Game
      // console.log(that);//{charSheet: Array(26), length: 5, elements: Array(5), speed: 10}
      this.t=setInterval(function(){
      	// console.log(this);//window
      	for(let i=0;i<that.elements.length;i++){
      		let tops=that.elements[i].offsetTop;
      		that.elements[i].style.top=`${tops+that.speed}px`;
      		if(tops>=500){

      			if(that.life==0){
    				let msg=confirm('游戏结束，请问你要退出游戏吗？'); 
    				if(msg==true){
					  clearInterval(that.t);					  
					}else{
					    that.life=10;
					    for(let i=0;i<this.elements.length;i++){
							document.body.removeChild(this.elements[i]);
						}	
						
						that.elements=[];
						that.position=[];
				        that.length++;
				        that.gq+=10;
					    that.start();
					}    				 
    			}
      			that.life--;
                that.lifeObj.innerText=that.life;
      			document.body.removeChild(that.elements[i]);
      			that.elements.splice(i,1);      			
      			that.position.splice(i,1);      			

      		}
      	}
      	if(that.elements.length<that.length){
      		that.getChar();
      	}
      },300)
    },
    // 键盘函数
    key:function(){
    	let that=this;
    	document.onkeydown=function(e){
    		let char=String.fromCharCode(e.keyCode);
    		console.log(char)
    		for(let i=0;i<that.elements.length;i++){
    			if(char==that.elements[i].innerText){
                    that.score++;
                    that.scoreObj.innerText=that.score;
    				document.body.removeChild(that.elements[i]);
    				that.elements.splice(i,1);
    				that.position.splice(i,1);
    				if(that.score==that.gq){
    					that.next();  
    				}
    				  				
    			}
    		}
    	}
    },
    next:function(){    	
		clearInterval(this.t);
		this.now++;		
        this.nowObj.innerText=this.now;
        let alertBox=document.createElement('div');
        alertBox.classList.add('.alertBox');
        alertBox.innerHTML=`
          <div class="alertBox">恭喜你到第<span class="alert">${this.now}</span>关啦！</div>
        `;
        setTimeout(function(){alertBox.style.display='none'}, 1000);
        document.body.appendChild(alertBox);
		for(let i=0;i<this.elements.length;i++){
			document.body.removeChild(this.elements[i]);
		}	
		this.elements=[];
		this.position=[];
        this.length++;
        this.gq+=10;
		this.start();        	    		
    }
}