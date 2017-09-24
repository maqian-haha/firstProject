/*
* @Author: 13009
* @Date:   2017-08-21 18:54:09
* @Last Modified by:   13009
* @Last Modified time: 2017-08-22 12:18:15
*/
$(function(){
	let texta=document.querySelector('textarea');
	let input=document.querySelector('input');
	let tip=document.querySelector('.tip>span');
	// let count=tip.innerText;
	let btn=document.querySelector('button');
	let content=document.querySelector('.content'); 
	let maxL=texta.maxLength;
	// let maxL=texta.getAttribute('maxLength')

	// console.log(maxL)
	texta.onkeyup=function(){
	   let val=this.value;
       tip.innerText=`${maxL-val.length}`;
	}
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
			let name=input.value;
			this.value='';
			let lis=document.createElement('li');
			lis.innerHTML=`
                <img src="link.jpg" alt="">
		        <ul class="conRight">
		          <h3 class="name">${name}</h3>
		          <p class="neirong">${val}</p>
		        </ul>
			`;
			content.prependChild(lis);
		}
	}
	// let lis=$('li',content);
	content.onclick=function(e){
		let a=e.target;
		if(a.nodeName=='LI'){
			a.style.background="yellowgreen";
		}
	}
	
	// btn.onclick = function () {
	// 	    let val=texta.value;
	// 		let name=input.value;
	// 		texta.value='';
	// 		let lis=document.createElement('li');
	// 		lis.innerHTML=`
 //                <img src="link.jpg" alt="">
	// 	        <ul class="conRight">
	// 	          <h3 class="name">${name}</h3>
	// 	          <p class="neirong">${val}</p>
	// 	        </ul>
	// 		`;
	// 		content.prependChild(lis);
 //    }

})