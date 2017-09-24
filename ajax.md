# 9.19

# ajax异步执行

## 一、应用场合

## 二、编程思路： ajax传递方式

## 三、编程思想：封装函数

### 1、全称：

async javascript and xml

xml:(HTML的祖先，存储信息（数据），速度慢):应用：c/s架构中配置文件、数据

html:是xml的扩展，呈现信息（数据）；xml+自己自定义标签

### 2.ajax的应用

表单异步验证

按需加载

投票系统  页面不跳转，及时查看信息

普通的文本输入提示和自动完成

### 3、ajax是干什么的

利用javascript的异步机制，无需刷新或者按照需求来加载需要的数据，提高用户的体验性，提高页面的加载数据来达到模拟桌面端软件的操作模式

### 4.目的或存在意义：

  **b/s:**天猫；所有东西在我的电脑，不需要安装软件 不能共享，不能互联，但是操作流畅

​                数据库（算法和数据结构的产物）                

  **c/s:**QQ;     需要安装软件，所有东西在硬盘

让基于b/s架构的软件去实现 c/s架构的软件操作的便利性    ajax

#### 需解决的问题：

（1）硬件的制约（浏览器的处理）

（2）网速的限制

网络速度的提升   硬件的提升     浏览器的速度

### 5.设置数据类型

```js
ajax.responseType="text"//json document buffer  ...
画布中：let info=obj.getImageData(0,0,300,150);//buffer:批量处理数据
```

### 6.兼容问题

```js
//ie6支持ActiveXObject("Microsoft.XMLHTTP")
var  xml=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")	
```

### 7.发送接收数据

ajax怎么发送数据

对方怎么去接受

### 两种方式：get   post

get   数据放在地址后面，传递数据较少

```js
ajax.open('get','get.php?name=zhangsan');
ajax.send();
```

post传递数据,必须设置请求头信息,在open和send之间

```
ajax.open("post","post.php");//后面不能加传递的数据
ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded"); ajax.send("name=zhangsan")
```

<form   enctype="">表单传输数据的方式

### 8.页面的跳转

页面--->另一个页面:<a href=""></a>只能看到一个页面，单线程的

**http协议**决定-->只由客户端向服务器发出请求。三次握手，四次挥手

它是无状态的协议，有两原因：

1.浏览器对于发出http协议请求是单线程的

2.与http无状态的协议有关

### 9.http协议：

http ：  浏览器与服务器之间的通讯协议

https： 是 http协议 升级，安全协议

 file   ：浏览器和本地文件之间通讯的协议

svn：

静态服务器：subline   webstorm   phpstorm   hbuilder

动态服务器：apache   iis 

#### 在一个html页面中，有哪些情况会发起Http请求？

1.script src

2.link href

3.img href

4.form action="2.php"

 表单中必须添加name属性，否则后台接收不到

### 10.ajax相关代码

#### （1）最基本的

```js
//浏览器里面， 提供了一个类XMLHttpRequest() 有这种能力的对象帮我们去到1.txt去取数据
		 var ajax=new XMLHttpRequest();
		 console.log(ajax)
		 /*监听                   状态码
		   1.当ajax对象创建的时候   1
		   2.当指定ajax的地址       2
		   3.当发送的时候           3
		   4.当找到地址             4
		 */
		  ajax.onreadystatechange=function(){
		  	/*console.log(ajax.readyState)*/
		  	if(ajax.readyState==4){
		  		//再次监听,状态码为200，
		  		if(ajax.status==200){
                 
		  			console.log(ajax.response);
		  		}
		  	}
		  }
		 ajax.onload=function(){
		 	console.log(ajax.response);
		 }
		 /*传递数据方式  get  post   
		   传递数据地址  
		   默认true，这个参数不写
		   false:会非常卡，
		   同源策略
		 */
		 ajax.open("get","1.txt",true);
		 ajax.send();//发出 时间太短console.log(ajax.response);内容拿不到
           // console.log(ajax.response);*/
```

#### （2）点击button将1.txt的内容获取到div里

```js
let button=document.querySelector("input");
	button.onclick=function(){
		var ajax=new XMLHttpRequest();//创建对象
        //注册监听事件，因为不知道数据什么时候能拿到，window.onload
		ajax.onload=function(){
             //浏览器输出什么东西，ajax.response就得到什么东西
			document.querySelector("div").innerHTML=ajax.response;
		}
		ajax.open('get','1.txt?name=zhangsan');//指定传递数据方式和访问地址
		ajax.send();
      //监听事件放在此不对，因为也许客户端和服务器运行速度特别快，数据已经拿到，那监听事件就没有注册
	}
```



# DNS:域名解析服务

http://uekuek.com/

1.电脑上有没有地址

2.路由器

3.就近的域名解析服务

4.广域的

cookie:信息存在客户端的->硬盘里面

session:信息存在服务器的，口令存在客户端的

session的作用周期：浏览器关掉什么都没了

# 网络安全

（1）基础设备：机房做容灾（大数据）多线路 宕机的预案

（2）数据处理 :ddos攻击（同一时间向一台服务器不断的发起攻击），防火墙的处理

（3）应用层面：权限的处理，防止sql的注入 用户验证

# 正则字符串

用来处理字符串  查找  匹配 查询 拆分 替换

在任何环境当中的语法一样   Php  js  

```js
js  哪些方法可以和正则配套使用
   js中一切皆对象 对象！=引用类型
```

## 创建规则

```js
var str="abcuek";
var reg=new RegExp("uek");
var reg=/uek/;
console.log(reg.test(str))//true 布尔
```

## 正则对象中方法：reg.html

```js
(1)test:用来测试字符串和规则是不是匹配
(2)exec:用来匹配结果  array
[0]:整体匹配的结果
[1]:
[2]:   第N个括号匹配的结果
[3]:
index:匹配的开始位置
input:要匹配的字符串  
eval():将符合js语法功能的代码当成代码去执行
```

## 语法：

### 原子:最小单位

```js
/\d/  匹配任意一个数字，/为转义字符
/\D/  匹配除数字之外的任意一个字符

/\w/   任意一个数字、下划线、字母
/\W/   除数字，字母，下划线之外的任意一个字符，比如$

/\s/: 匹配空白 包括空格 回车 table键
/\S/: 匹配除空白之外的任意一个字符

\n :换行

\t :制表符

\v :垂直制表符

```

### 原子表[]

```js
/[2-5]/ 匹配2到5之间的任意一个数字
/[^a-b]/ :匹配任意不在a到c之间的字符
```

### 元字符：

```js
在正则里面有特殊意义的字符，如：[],$,^,/,|(或者)，{}，？，逗号，+，点，*
eg要匹配[],要加转义符，/\[\]/
```

###  原子分组  ()

   ()   两个作用   第一个是分组保存在内存里面

​                            第二个考虑优先级

    /([a-z])([0-9])\1\2/ 
    /(?:[a-z])([0-9])\2/   前边的?: 代表取消内存保存 ，如果没有的话，分组里边的内容会保存在内存

###  量词  

```js
/[a-z]{3}/  匹配三个的字母，多余的不匹配

/[a-z]{3，}/  匹配三个以上的字母
/[a-z]{3,10}/

/[a-z]*/  匹配0个或多个，0个也会成功

/[a-z]+/  匹配1个或多个

/[a-z]?/  匹配0个或1个

/[a-z]*?/匹配最少的个数，基本会是0个

/[a-z]+?/  匹配1个

/[a-z]??/  匹配0个

/./  匹配除换行之外的内容

```

### 边界控制

```js
/^  $/ ^为开头，$为结尾
eg:/^123/ 开头必须是123
   /^123$/ 字符串必须是123

邮箱验证： /^[a-zA-Z1-9]\w{5,20}@(qq|163|126).(com|cn|com.cn)
密码验证：/^[a-zA-Z]\w{5,11}$/
正则表达式匹配中文：  /^[\u4e00-\u9fa5]+$/ 
单词匹配：  /\bworld\b/
```

### 三种模式

```js
 （1）i不区分大小写
     eg:/a/i


 （2）m 单行多行匹配
    默认单行处理
    eg:str="ccc\nabc";//ccc
                        abc
       /^abc/m:当做多行处理,可以匹配到abc


 （3）g 全局
    eg:str="a1b2c3";
     /\d/g:可以匹配到1,2,3
 
 字符串对象中的方法：match,replace支持全局g
  search不支持全局g


```



# 版本控制工具

## svn   

一个中心  问题：无网不能用

## git  

两个中心 本地异地都是同步的    ,静态页面

远程：一个中心

电脑：一个中心

### 命令行上传到Github的步骤

##### 一、建立本地git仓库

git init，git接管，初始化成功 .git文件夹（保存版本）

##### 二、将本地项目工作区的所有文件添加到暂存区

git add  .  点提交文件所有，确定要提交的内容

​      git add  1.html// //如果想添加项目中的指定文件，那就把.改为指定文件名即可  

##### 三、将暂存区的文件提交到本地仓库

git commit -m "one" 形成本地版本////冒号里面写注释语句

##### 四、将本地仓库关联到Github上

git remote add origin http://....

如果出现错误：fatal:remote origin already exists

​        那就先输入 git remote rm origin

##### 五、将代码由本地仓库上传到Github远程仓库

git push origin master 远程仓库git里面

git clone "http"

git pull

ls-a





setting -pages-master-生成一个网址

















