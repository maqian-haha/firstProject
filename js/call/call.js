//<!--data 处理 按照拼音首字母-->
//<!--
//	dataObj={
//		    'A':[{},{},{}],
//		    'Z':[{},{},{}]
//		    }
//-->
// <!--let keys=Object.keys.dataObj().sort(),遍历keys-->
 window.onload=function(){
 	//1.存储数据
 	let linkman=[
   	 {'name':'马倩','phone':'15935664010','pinjin':'mq'},
   	 {'name':'马苗','phone':'18935664010','pinjin':'mm'},
   	 {'name':'马驰','phone':'18335664010','pinjin':'mc'},
 	 {'name':'刘会阳','phone':'18306890823','pinjin':'lhy'},
 	 {'name':'迟睿','phone':'17835423481','pinjin':'cr'},
 	 {'name':'赵兰','phone':'18441986935','pinjin':'zl'},
 	 {'name':'薛雅丹','phone':'17835424614','pinjin':'xyd'},
 	 {'name':'王金晶','phone':'17835423478','pinjin':'wjj'},
 	 {'name':'闫红旺','phone':'17835424661','pinjin':'yhw'},
 	 {'name':'许尧飞','phone':'888888888','pinjin':'xyf'},
 	 {'name':'傅江','phone':'9999999999','pinjin':'fj'},
 	 {'name':'周伟红','phone':'10101010','pinjin':'zwh'},
 	 {'name':'张文','phone':'111111111','pinjin':'zw'},
 	 {'name':'史琳','phone':'222222222','pinjin':'sl'},
 	 {'name':'金胜旺','phone':'333333333','pinjin':'jsw'}

 	];
// 	localStorage.linkman=JSON.stringify(linkman);//对象->字符串
//  let data=JSON.parse(localStorage.linkman);//把json格式的字符串->对象
    let data = getData();
    let dl=document.querySelector('dl')
    let slide=document.querySelector('.slide');
    let tips=document.querySelector('.tip');

    let header=document.querySelector('header')
    console.log(header.offsetHeight);
    
     render(data);
     let inputs=document.querySelector('input');
         inputs.onkeyup=function(){
        	let val=this.value.trim();
        	let filter=data.filter(element=>element.name.includes(val)||element.phone.includes(val)||element.pinjin.includes(val));
        	render(filter);
     }
    //console.log(data)
    function render(data){ 
    	let dataObj={};
	    for(let i=0;i<data.length;i++){
            let first=data[i].pinjin.charAt(0).toUpperCase()
            if(!dataObj[first]){
         	    dataObj[first]=[];
            } 
            dataObj[first].push(data[i])     
        } 
        //console.log(dataObj)
        let key=Object.keys(dataObj).sort();
	    //console.log(key)
	    dl.innerHTML = '';
        slide.innerHTML = '';
	    key.forEach(elements=>{
	        slide.innerHTML+=`<li>${elements}</li>`;
    	    dl.innerHTML+=`<dt>${elements}</dt>`;
    	    dataObj[elements].forEach(value=>{
    		  dl.innerHTML+=`<dd><a href="tel:${value.phone}">${value.name}</a><dd>`;
    	    })
        })
	     
	     //侧边栏
        let heights=slide.offsetHeight;
        slide.style.marginTop=`-${heights/2}px`;
        let dts=document.querySelectorAll('dt');
        tips.innerText = key[0];
        let arr=[];
        
    
       //offsetTop<tipHeight+headerHeight+scrollTop,找到每一个dt的TOP
    
        dts.forEach(value=>{
    	   arr.push(value.offsetTop);
        })
      
        let lis=document.querySelectorAll('li');
	    lis.forEach((element,index)=>{
			element.onclick=function(){
                 animate(document.body,{scrollTop:arr[index]-header.offsetHeight+dts[0].offsetHeight},1000)
			}
	    })
        window.onscroll=function(){
    	  let st=document.body.scrollTop;
    	  arr.forEach((value,index)=>{
    	 	if(value<st+header.offsetHeight){
    	 		tips.innerText=key[index];	
    	 	}    	 
    	 })
       }
        
        
       
    }
    
   
    
    function getData(){
    	  let data=localStorage.getItem(linkman)?JSON.parse(localStorage.linkman):false;
    	  if(!data){
    	  	localStorage.setItem('linkman',JSON.stringify(linkman));
    	  	data=JSON.parse(localStorage.linkman);
    	  }
          return data;
    }
    
    
}