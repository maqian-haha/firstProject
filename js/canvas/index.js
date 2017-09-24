window.onload=function(){
	let canvas=document.querySelector('canvas');
	let mask=document.querySelector('.mask');
	let palette=new Palette(canvas,mask);
	let tools=document.querySelectorAll('.tools');
	let styles=document.querySelectorAll('.style');
	let inputs=document.querySelectorAll('input');
	let ebtn=document.querySelector('.icon-xiangpi');
	let eraser=document.querySelector('.eraser');
	let wenzi=document.querySelector('.icon-weibiaoti6');
	let save=document.querySelector('.icon-baocun');
	tools.forEach(element=>{
		element.onclick=function(){
			let active=document.querySelector('label[active=true]');
			active.setAttribute('active',false);
			this.setAttribute('active',true);
			if(this.id=='pet'){
				palette.pet();
			}else{
				if(this.id=='duobian'){
					palette.moreb=prompt('请输入你想要的边数',6);
				}else if(this.id=='duojiao'){
					palette.morej=prompt('请输入你想要的角数',6);
				}			
				palette.draw(this.id);
			}
		}
	})
	let cc=document.querySelector('.cc');
	
	styles.forEach((element)=>{
		element.onclick=function(){
			let active=cc.querySelector('label[active=true]');
			active.setAttribute('active',false);
			this.setAttribute('active',true);			
			palette.style=this.id;					
		}
	})
	inputs.forEach((element,index)=>{
		element.onchange=function(){
			if(index==0){
				console.log(this.value)				
				palette.strokeStyle=this.value;
			}else if(index==1){
				palette.fillStyle=this.value;				
			}
		}
	})
//	let qq=document.querySelector('.qq');
//	let xiugai=document.querySelectorAll('.xiugai');
//	xiugai.forEach((element)=>{
//		element.onclick=function(){
//			let active=qq.querySelector('label[active=true]');
//			active.setAttribute('active',false);
//			this.setAttribute('active',true);								
//		}
//	})
	ebtn.onclick=function(){
		palette.eraser(eraser,20,20)
	}
	wenzi.onclick=function(){
		palette.font(100,30);
	}
	save.onclick=function(){
      save.href=canvas.toDataURL('image/png');//将图片转为base64
      save.download='a.png';//a.png为下载的文件名
    }
    let reverse=document.querySelector('.icon-fanzhuan');
    reverse.onclick=function(){
    	palette.reverse();
    }
    let clip=document.querySelector('.clip');
    let clipBtn=document.querySelector('.icon-caijian');
    clipBtn.onclick=function(){
    	palette.clip(clip);
    }
	
//	let line=document.querySelector('.icon-xiantiao-hengxian');
//	let xuxian=document.querySelector('.icon-xuxian');
//	let pet=document.querySelector('.icon-pan_icon');
//	let juxing=document.querySelector('.icon-juxing');
//	let yuan=document.querySelector('.icon-yuan');
//	let duobian=document.querySelector('.icon-duobianxing');
//	let xiangpi=document.querySelector('.icon-xiangpi');
//	let ctrlZ=document.querySelector('.icon-chexiao')
//	let dj=document.querySelector('.icon-miaobianwujiaoxing');
//	line.onclick=function(){
//		palette.draw('line');
//	}	
//	xuxian.onclick=function(){
//		palette.draw('xuxian');
//	}
//	pet.onclick=function(){
//		palette.pet();
//	}
//	juxing.onclick=function(){
//		palette.draw('juxing');
//	}
//	yuan.onclick=function(){
//		palette.draw('yuan');
//	}
//	duobian.onclick=function(){
//		this.moreb=prompt('请输入你想要的边数',5)
//		palette.draw('duobian');
//	}
//	dj.onclick=function(){
//		this.morej=prompt('请输入你想要的角数',5)
//		palette.draw('duojiao');
//	}
//	xiangpi.onclick=function(){
//		palette.eraser();
//	}
//	
//	ctrlZ.onclick=function(){
//		palette.dianjiCZ();
//	}
}
