/*
* @Author: 13009
* @Date:   2017-08-14 16:19:05
* @Last Modified by:   13009
* @Last Modified time: 2017-08-17 14:21:00
*/

'use strict';
 function $(select,ranger=document){
        console.log(1)
    	if(typeof select=="string"){
    		//参数默认值
    	/*	//1.分支结构
    		if(ranger==undefined){
    			ranger=document;
    		}
    		//2.三元表达式
    		ranger=ranger==undefined?document:ranger;
    		ranger=ranger?ranger:document;
    		//3、逻辑运算符
    		ranger=ranger||undefined;*/

    		let selector=select.trim();
	    	let firstChar=select.charAt(0);
	    	if(firstChar=="#"){
	           return document.getElementById(selector.substring(1));
	    	}else if(firstChar=="."){
	           return ranger.getElementsByClassName(selector.substring(1));     
	    	}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selector)){
	           return ranger.getElementsByTagName(selector);     
	    	}

    	}else if(typeof select=="function"){
    		window.onload=function(){
    			select();
    		}
    	}
 }



    /*
    html(element,content)
    获取或者是设置元素内容，识别标签
     content有值------>设置，无返回值
     content无值------>获取，返回
     */
    function html(element,content){
        if(arguments.length==2){
            element.innerHTML=content;
        }else if(arguments.length==1){
            return element.innerHTML;
        }
    }


    /*
    text()

     */
    function text(element,content){
        if(arguments.length==2){
            element.innerText=content;
        }else if(arguments.length==1){
            return element.innerText;
        }
    }




    /*
    设置样式
    css(element,attrObj)
    attrObj:json对象
     */
    function css(element,attrObj){
        for(let i in attrObj){
            element.style[i]=attrObj[i];
        }
    }
/*添加事件
on(collection,type,fn)
[type]:变量
 */
function on(collection,type,fn){
    for(let  i=0;i<collection.length;i++){
        collection[i][type]=fn;
    }
}
//删除事件
function off(collection,type){
    for(let  i=0;i<collection.length;i++){
        collection[i][type]=null;
    }
}

//变大、移动动画
function animate(element,attrObj,speed,fn){
    let t=setInterval(function(){
        for(let i in attrObj){
            let start=parseInt(getComputedStyle(element,null)[i]);
            if(start>=attrObj[i]){
               clearInterval(t);
               if(fn){
                fn();
               }
            }
            element.style[i]=`${start+speed}px`;
        }
    }, 60)
}
 
/*
    insertAfter
    某一个元素后面插入
        指定元素的下一个元素节点的前面
        nextElementSibling  insertBefore
*/
 function inserAfter(insert,position){
    let next=position.nextElementSibling;
    let parent=position.parentNode;
    if(next){
        //inserBefore
        parent.insertBefore(insert,next);
    }else{
        //appendChild
        parent.appendChild(insert);
    }
 }
 


 // 某一个元素后面插入
 // A标签-----插入-----B标签
 HTMLElement.prototype.insertAfter=function(insert){
    let next=this.nextElementSibling;//元素节点之后的兄弟元素节点
    let parent=this.parentNode;
    if(next){
        //inserBefore
        parent.insertBefore(insert,next);
    }else{
        //appendChild
        parent.appendChild(insert);
    }
 }
 //在父元素的最前面插入一个子元素,insert插入的元素
 HTMLElement.prototype.prependChild=function(insert){
    let first=this.firstElementChild;//第一个元素节点
    if(first){
        this.insertBefore(insert,first);
    }else{
        this.appendChild(insert);
    }
 }
 //将元素节点插入到parent父元素的最前面位置；参数parent为插入的父元素的位置
 HTMLElement.prototype.prependTo=function(parent){
    parent.prependChild(this);
 }
 //将元素节点插入到parent父元素的最后面位置
 HTMLElement.prototype.appendTo=function(parent){
   parent.appendChild(this);
 }
 //清空子元素
 /*
 倒着删，下标不会变
  */
HTMLElement.prototype.empty=function(){
   let child=this.childNodes;
   // for(let i=childNodes.length;i>0;i--){
   //  this.removeChild(child[i]);
   // }
   this.innerHTML='';
 }
 //不用找父元素，清空自己
HTMLElement.prototype.remove=function(){
   let parent=this.parentNode;
   parent.removeChild(this);
 } 
 //next:获取下一个元素节点
 //nextAll 获取下面所有的元素节点
 //nextUntil 获取到某一个范围
 //previous()
 //previousAll()
 //previousUntil()
 //closet()
 //parent()
 //parents()
 //parentUntil()


//next()
 HTMLElement.prototype.next=function(){
    let next=this.nextElementSibling;
    if(next){
        return next;
    }else{
        return false;
    }
 }
//nextAll()
HTMLElement.prototype.nextAll=function(){
    let nexte=this.next();
    let newarr=[];
    if(nexte){
        newarr.push(nexte);
    }else{
        return false;
    }

    while(nexte){
        nexte=nexte.next();
        newarr.push(nexte);    
    }
    newarr.pop();
    return newarr;
 }
//nextUntil 
HTMLElement.prototype.nextUntil=function(startp,endp){
     let nexte=this.next();
}