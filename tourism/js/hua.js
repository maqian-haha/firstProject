window.addEventListener("load",function(){
   let num=0;
    $(".nextImg").click(function(){

        if(num==2){
            return;
        }
        num++;
        $(".hua").css({"marginLeft":`${-1347*num}px`})
    })
  $(".preImg").click(function(){

      if(num==0){
          return;
      }
      num--;
      $(".hua").css({"marginLeft":`${-1347*num}px`})
  })
   $(".hua>li").hover(function(){
       $(".hua>li").css({"transform":"scale(1)"})
       $(this).css({"transform":"scale(1.2)"})
   },function(){
       $(".hua>li").css({"transform":"scale(1)"})
   })

})