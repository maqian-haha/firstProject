/*
* @Author: 13009
* @Date:   2017-08-14 16:19:05
* @Last Modified by:   13009
* @Last Modified time: 2017-08-14 16:27:26
*/

'use strict';
 function $(select,ranger=document){
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