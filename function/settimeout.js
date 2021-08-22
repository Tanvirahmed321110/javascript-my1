
for(var a=1;a<=10;a++){
    (function(n){
        setTimeout(function()  {
            console.log(n)
        }, 1000*n);
    })(a)
  }
  
  
  for(var d=2;d<=17;d++){
      (function(num){
          setTimeout(function()  {
              console.log(num)
          }, 1000*num);
      })(d)
  }
  
  
  
  for(i=0;i<10;i++){
      (function(number){
      setTimeout(function(){
          console.log(number)
      }, 500*number);
      })(i)
  }