/*
* @Author: 13009
* @Date:   2017-08-17 11:57:03
* @Last Modified by:   13009
* @Last Modified time: 2017-08-17 19:17:22
*/
$(function(){
	alert(3)
	let starDisplay=$('.starDisplay')[0];
	let starBox=$('.starBox')[0];
	let lis=$('li',starBox)
	let btn=$('button',starDisplay);
	let btnL=btn[1];
	let btnR=btn[0];
	console.log(btnL);
	console.log(btnR);
	// let childNum=starBox.childElementCount;
	// let childW=lis[0].offsetWidth+parseInt(getComputedStyle(lis[0],null).marginRight);
	// starBox.style.width=`${childNum*childW}px`;
	// let num=0
	


    //两屏
	btnL.onclick=function(){
		starBox.style.marginLeft='-1240px';
	}
	btnR.onclick=function(){
		starBox.style.marginLeft='0';
	}
	
    //三屏
	// btnL.onclick=function(){
	// 	if(num==2){return};
	// 	num++
	// 	starBox.style.marginLeft=`${-1240*num}px`;
	// }
	// btnR.onclick=function(){
	// 	if(num==0){return};
	// 	num--
	// 	starBox.style.marginLeft=`${-1240*num}px`;
	// }
})