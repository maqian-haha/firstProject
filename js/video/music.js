window.onload=function(){
	
	let pause=document.querySelector('.icon-bofang1');
	let audio=document.querySelector('audio');
	let song=document.querySelector('.song');
	let singer=document.querySelector('.singer');
	let wsong=document.querySelector('.wsong');
	let wsinger=document.querySelector('.wsinger');
	let list=document.querySelector('.list');
	let pre=document.querySelector('.icon-shangyishou');
	let next=document.querySelector('.icon-xiayishou');
	let current=document.querySelector('.current');
	let duration=document.querySelector('.duration');
	let bar=document.querySelector('.bar');
	let yin=document.querySelector('.icon-yinliang');
	let volume=document.querySelector('.volume');
	let vbar=document.querySelector('.vbar');
	let yuan=document.querySelector('.yuan');

	let now=0;
	console.log(volume.offsetHeight)
	render(database[now])
	next.onclick=function(){
		now++;
		if(now==database.length){
			now=0
		}
		render(database[now]);		
	}
	pre.onclick=function(){
		now--;
		if(now==-1){
			now=database.length-1;
		}
		render(database[now]);		
	}
	pause.onclick=function(){
		if(audio.paused){
			audio.play();
		}else{
			audio.pause();
		}
		pause.classList.toggle('icon-zanting1');
	}
	yin.onmouseenter=function(){
		volume.style.display='block';
		yuan.onmousedown=function(e){
			console.log(volume.offsetHeight)
			e.preventDefault();
			let cy=e.clientY;
			let ot=yuan.offsetTop;
			document.onmousemove=function(e){			
				let oy=e.clientY;
			    let tops=oy-cy+ot;
			    if(tops<=-8){
			    	tops=-8;
			    }
			    if(tops>=100-16+8){
			    	tops=100-16+8;
			    }
			    yuan.style.top=`${tops}px`;
			    vbar.style.height=`${100-tops}px`;
			    audio.volume=(100-(tops+8))/100;
			    if(audio.volume==0){
			    	yin.classList.remove('icon-yinliang');			    	
			    	yin.classList.add('icon-jingyin');
			    }else{
			    	yin.classList.remove('icon-jingyin');			    	
			    	yin.classList.add('icon-yinliang');
			    }
			}
			document.onmouseup=function(){
				document.onmousemove=null;
				document.onmouseup=null;
			}
			
		}
	}
	yin.onmouseleave=function(){
		volume.style.display='none';
	}
	
	audio.oncanplay=function(){
		audio.ontimeupdate=function(){
//		console.log(audio.currentTime+'-------------'+audio.duration);
		//当前播放时间比总时间的百分比		
	    let ct=fn(audio.currentTime);	
		let allTime=fn(audio.duration);
		let bili=audio.currentTime/audio.duration;
		bar.style.width=`${bili*100}%`;
		current.innerText=ct;
		
		database[now].lyrics.forEach((element,index)=>{
			if(ct==element.time){
				let a= index;
                list.innerHTML = ``;
                if (index < 4){
                    index = 0;
                }else {
                    index -= 4;
                }
				for(let j=index;j<database[now].lyrics.length;j++){
					
					list.innerHTML+=`
						 <li  class="list${j}">${database[now].lyrics[j].lyric}</li>
						`;
				}
				let obj = document.querySelector(`.list${a}`);
                obj.style.color = '#00C5C7';
			}
		})
			
					
	}
	}
	
	audio.onended=function(){
		now++;
		if(now==database.length){
			now=0
		}
		render(database[now]);	
	}
	
	function render(data){
		song.innerText=data.songs;
		wsong.innerText=data.songs;
		singer.innerText=data.name;
		wsinger.innerText=`-----${data.name}`;
		audio.src=data.src;
		duration.innerText=data.alltime;

		list.innerHTML='';
	
		for(let i=0;i<data.lyrics.length;i++){
			list.innerHTML+=`
				 <li>${data.lyrics[i].lyric}</li>
				`;
		}
		
	}
	//格式化时间
	function fn(time){
		let minute=Math.floor(time/60)>=10?Math.floor(time/60):`0${Math.floor(time/60)}`;
		let second=Math.floor(time%60)>=10?Math.floor(time%60):`0${Math.floor(time%60)}`;
		return `${minute}:${second}`;
	}

	
	
	
	
	
	
}
