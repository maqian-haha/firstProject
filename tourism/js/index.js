/*
* @Author: 13009
* @Date:   2017-09-01 11:28:27
* @Last Modified by:   13009
* @Last Modified time: 2017-09-10 10:56:14
*/
window.onload=function(){
	//banner图的自动轮播
	let banner=document.querySelector('.banner');
	let bannerBox=document.querySelector('.bannerBox');
	let blis=bannerBox.querySelectorAll('li');
	let lunbodian=document.querySelector('.lunbodian');
	let lli=lunbodian.querySelectorAll('li')
	let t;
	let bnow=0;
	banner.onmouseenter=function(){
		clearInterval(t)
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
	t=setInterval(move,3000);
	function move(){
       bnow++;
       if(bnow==4){
       	bnow=0;
       }
       for(let i=0;i<blis.length;i++){
       	 blis[i].style.display='none';
       	 lli[i].classList.remove('hot');
       }
       blis[bnow].style.display='block';
       lli[bnow].classList.add('hot');
	}

	for(let i=0;i<lli.length;i++){
		lli[i].onclick=function(){
			clearInterval(t)
			lli[bnow].classList.remove('hot');
			blis[bnow].style.display='none';
			blis[i].style.display='block';		
			lli[i].classList.add('hot');		
			bnow=i;			
		}
	}
	
}