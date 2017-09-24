/*
 * 属性
 *   线宽  端点 颜色  边数   多角形  尺寸（橡皮，铅笔）  canvas的widths height history
 *   (ctx canvas)
 * 
 * 
 * 方法
 *  画线  虚线 铅笔 多边形  圆 矩形 多边形
 *  橡皮  裁切 文字
 *  新建 保存 导入图片
 */
//history  canvas 尺寸


//样式
function  Palette(canvas,mask){
	this.mask=mask;
	this.canvas=canvas;
	this.ctx=this.canvas.getContext('2d');
	this.history=[];
	this.temp=null;
	this.cw=this.canvas.width;
	this.ch=this.canvas.height;
	//样式
	this.lineWidth=2;
	this.lineCap='butt';
	this.fillStyle='#3e3323';
	this.strokeStyle='#894562';
	this.pi=Math.PI;
	//角，边
    this.moreb='5';
    this.morej='5';
	//描边 ，填充
	this.style='stroke';
}
Palette.prototype={
	//样式初始化
	init:function(){
		this.ctx.lineWidth=this.lineWidth;
		this.ctx.lineCap=this.lineCap;
		this.ctx.fillStyle=this.fillStyle;
		this.ctx.strokeStyle=this.strokeStyle;
		this.ctx.setLineDash([0,0]);
	},
	line:function(ox,oy,cx,cy){
    	this.ctx.beginPath();    
	    this.ctx.moveTo(ox,oy);			    	    						
		this.ctx.lineTo(cx,cy);
		this.ctx.closePath();
		this.ctx.stroke();			
	},
	xuxian:function(ox,oy,cx,cy){
    	this.ctx.beginPath();
    	this.ctx.setLineDash([10,10]);
	    this.ctx.moveTo(ox,oy);			    	    						
		this.ctx.lineTo(cx,cy);
		this.ctx.closePath();
		this.ctx.stroke();						
	},
	pet:function(){
		let that=this;
		this.mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
		    that.init();
			that.ctx.beginPath();
			that.ctx.moveTo(ox,oy);
			that.mask.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				if(that.history.length>0){
					that.ctx.putImageData(that.history[that.history.length-1],0,0)
				}
				that.ctx.lineTo(cx,cy);			
				that.ctx[that.style]();
			}		
			that.mask.onmouseup=function(){
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
				that.mask.onmousemove=null;
				that.mask.onmouseup=null;
			}
	    }
		this.ctrlZ();
	},
	juxing:function(ox,oy,cx,cy){
		this.ctx.beginPath();
		this.ctx.rect(ox,oy,cx-ox,cy-oy);
		this.ctx.closePath();
		this.ctx[this.style]();	
	},
	yuan:function(ox,oy,cx,cy){		
	    let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));	    	
    	this.ctx.beginPath();						    	    						
		this.ctx.arc(ox,oy,r,0,2*this.pi);
		this.ctx.closePath();
		this.ctx[this.style]();			
	},
	duojiao:function(ox,oy,cx,cy){
		let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
		this.ctx.clearRect(0,0,this.cw,this.ch);
		this.dj(ox,oy,r,this.morej);
		this.ctrlZ();
	},
	dj:function(ox,oy,r,j){
		let r1=r/2;
		let deg=360/(j*2)*(Math.PI/180);
		if(this.history.length>0){
			this.ctx.putImageData(this.history[this.history.length-1],0,0)
		}
	    this.ctx.beginPath();
	    this.ctx.moveTo(ox+r,oy);
	    for(let i=1;i<=j*2;i++){
	      if(i%2==0){
	      	this.ctx.lineTo(ox+r*Math.cos(i*deg),oy+r*Math.sin(i*deg));
	      }else{
	      	this.ctx.lineTo(ox+r1*Math.cos(i*deg),oy+r1*Math.sin(i*deg));
	      }
	      
	    }
	    this.ctx[this.style]();
	},
	duobian:function(ox,oy,cx,cy){		
		let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));				
		this.dbx(ox,oy,r,this.moreb);			
		this.ctrlZ();
	},
	dbx:function(x,y,r,bian){
		this.ctx.clearRect(0,0,this.cw,this.ch);
		if(this.history.length>0){
			this.ctx.putImageData(this.history[this.history.length-1],0,0)
		}
		let deg=360/bian*(this.pi/180);
	    this.ctx.beginPath();
	    this.ctx.moveTo(x+r,y);
        for(let i=1;i<=bian;i++){
   	      this.ctx.lineTo(x+r*Math.cos(i*deg),y+r*Math.sin(i*deg));
        }
       this.ctx[this.style]();
	},
	eraser:function(obj,w,h){
		let that=this;		
	    this.mask.onmousedown=function(e){
	    	obj.style.display='block';
	    	 //去掉浏览器的默认行为
	          e.preventDefault();
	        that.mask.onmousemove=function(e){
	         
	          let ox=e.offsetX,oy=e.offsetY;
//	          if(that.history.length>0){
//					that.ctx.putImageData(that.history[that.history.length-1],0,0)
//			  }
	          let lefts=ox-w/2,tops=oy-h/2;
	          if(lefts<0){
	          	lefts=0;
	          }
	          if(lefts>=that.cw-w){
	          	lefts=that.cw-w;
	          }
	          if(tops<0){
	          	tops=0;
	          }
	          if(tops>=that.ch-h){
	          	tops=that.ch-h;
	          }
	          obj.style.left=`${lefts}px`;
	          obj.style.top=`${tops}px`;
	          that.ctx.clearRect(lefts,tops,w,h);
	        }
	        that.mask.onmouseup=function(){
		    	obj.style.display='none';
		    	that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
		        that.mask.onmousemove=null;
		        that.mask.onmouseup=null;
		    }
	    }
	    
		this.ctrlZ();
	},
	font:function(w,h){
		let lefts,tops;
		let that=this;
		this.mask.onclick=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			lefts=ox-w/2,tops=oy-h/2;
			let divs=document.createElement('div');			
			divs.style.cssText=`
			  width:100px;height:30px;border:1px solid #000;
			  position:absolute;top:${tops}px;left:${lefts}px;
			`;
			this.mask.appendChild(divs);
			this.mask.onclick=null;
			divs.contentEditable=true;
			//鼠标的位置+鼠标移动的位置
			divs.onmousedown=function(e){
				let cx=e.clientX,cy=e.clientY;
				let ol=divs.offsetLeft,ot=divs.offsetTop;
				that.mask.onmousemove=function(e){
					let ox=e.clientX,oy=e.clientY;					
					lefts=ox-cx+ol,tops=oy-cy+ot;
					divs.style.left=`${lefts}px`;
					divs.style.top=`${tops}px`;
				}
				that.mask.onmouseup=function(){
					that.mask.onmousemove=null;
					that.mask.onmouseup=null;
				}
				
			}
            let that=this;
            divs.onblur=function(){
            	let value=this.innerText;
            	that.ctx.font='bold 20px sans-serif';
            	that.ctx.textAlign='center';
            	that.ctx.textBaseAlign='middle';
            	that.mask.removeChild(divs);            	
            	that.ctx.fillText(value,lefts,tops);
            }
		}.bind(this);
		
	},
	ctrlZ:function(){
		let that=this;
		document.onkeydown=function(e){
			if(e.ctrlKey&& e.keyCode==90 ){
				let img=that.history.pop();
				that.ctx.putImageData(img,0,0)
			}
	    }
	},
	dianjiCZ:function(){
		let img=that.history.pop();
		this.ctx.putImageData(img,0,0)
	},
	draw:function(type){
		this.mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			this.init();
			this.mask.onmousemove=function(e){				
				let cx=e.offsetX,cy=e.offsetY;
				this.ctx.clearRect(0,0,this.cw,this.ch);
				if(this.history.length>0){
					this.ctx.putImageData(this.history[this.history.length-1],0,0)
				}				
				this[type](ox,oy,cx,cy);
			}.bind(this);		
			this.mask.onmouseup=function(){				
				this.history.push(this.ctx.getImageData(0,0,this.cw,this.ch));
				this.mask.onmousemove=null;
				this.mask.onmouseup=null;
			}.bind(this)
	    }.bind(this);
	 this.ctrlZ();
	},
	reverse:function(){
		let imgData=this.ctx.getImageData(0,0,this.cw,this.ch);
		console.log(imgData);
		let data=imgData.data;
		for(let i=0;i<data.length;i+=4){
			data[i]=255-data[i];
			data[i+1]=255-data[i+1];
			data[i+2]=255-data[i+2];
		}
		this.ctx.putImageData(imgData,0,0)
	},
	clip:function(clipObj){
		let that=this;
		this.mask.onmousedown=function(e){
			let w,h,minX,minY;//minX,minY为起始点
			let ox=e.offsetX,oy=e.offsetY;
			that.mask.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				w=Math.abs(cx-ox),h=Math.abs(cy-oy);
				minX=ox>cx?cx:ox;
				minY=oy>cy?cy:oy;
				clipObj.style.cssText=`
					display:block;
					left:${minX}px;top:${minY}px;
					width:${w}px;height:${h}px;
					`;				
			}
			that.mask.onmouseup=function(){			
				//截取，清除，保存历史记录，截取的放回去
				that.temp=that.ctx.getImageData(minX,minY,w,h);
				that.ctx.clearRect(minX,minY,w,h);
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
				that.ctx.putImageData(that.temp,minX,minY);				
				that.mask.onmousemove=null;
				that.mask.onmouseup=null;
				that.drag(minX,minY,w,h,clipObj);
			}
		}
	},
	//拖拽（位置，大小，对象） 
	drag:function(minX,minY,w,h,clipObj){
		let that=this;
		this.mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			if(ox>=minX && ox<=minX+w && oy>=minY && oy<=minY+h){
				that.mask.style.cursor='move';
			}else{
				that.mask.style.cursor='default';
			}
			that.mask.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				let lefts=cx-ox+minX,tops=cy-oy+minY;
				if(lefts<0){
		          	lefts=0;
		        }
		        if(lefts>=that.cw-w){
		          	lefts=that.cw-w;
		        }
		        if(tops<0){
		          	tops=0;
		        }
		        if(tops>=that.ch-h){
		          	tops=that.ch-h;
		        }
		        
				clipObj.style.left=`${lefts}px`;
				clipObj.style.top=`${tops}px`;
				
		
                that.ctx.clearRect(0,0,that.cw,that.ch)
				if(that.history.length>0){
					that.ctx.putImageData(that.history[that.history.length-1],0,0)
				}	
				that.ctx.putImageData(that.temp,lefts,tops);	
			}
			that.mask.onmouseup=function(){
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
				clipObj.style.display='none';
				that.mask.onmousemove=null;
				that.mask.onmouseup=null;
				that.temp=null;
			}
		}
	},
}
