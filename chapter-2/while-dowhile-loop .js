         
         //  while loop

     var a=1
     while(a<21){
    console.log('tanvir ahmed ',a++)
}
  
  var z=10
  while(z<51){
      console.log('cont',z++)
  }


     // bijor number   (sub vabe)
            var a=1
              while(a<30){
                console.log(a)
                a+=2
            }    
    // even number (sub vabe)
            a=1
            while(a<10){
                console.log(a)
                a+=2
            }
        
            var cricket=10
            while(cricket<=30){
                console.log('cricket out',cricket)
                cricket++
                console.log('new')
            }
           
           
             



var main=true

while(main){
    var randomNumber=parseInt(Math.random()*50+1)
    if(randomNumber===8){
        console.log('winner  winner tanvir ahmed ', randomNumber ,'is random number success')
        main=false
    }
    else{console.log('you have got' ,randomNumber)}
}

var again=true
while(again){
    var atry=Math.floor(Math.random()*20+1)
    if(atry===2){
        console.log('win',atry)
        again=false
    }
    else{console.log('runing',atry)}
}

var tanvir=true
while(tanvir){
    var rand=Math.round(Math.random()*15+1)
    if(rand===15){
        console.log('goted',rand)
        tanvir=false
    }
    else{console.log('trying',rand)}
}


var run=false
while(run){
    console.log('i am running')
}


       // (do while loop) 
          
do{
    console.log('i am running')
}
 while(run)


 var a=2

 do{
     console.log('run')
 }
 while(a>10)




           //nested loop   (akta loop er vitor r ek ta loop chalaile nested loop hy) 

  var x =20
  for(var z=1;z<=x;z++){
      var main=''
      for(var y=12;y<=z;y++){
      main+=y+ ' '
      }
    console.log(main)
  }

  var n=10
  for(var a=1;a<=n;a++){
      var result=''
       for(var b=1;b<=a;b++){
         result+=b+' '
       }console.log(result)
  }

  var w='6'
  for(var q=1;q<=w;q++){
      var star=''
     for(var e=1;e<=w;e++){
       star+='# '
   }  console.log(star)
}


var a=20
for(var b=0;b<=a;b++)
{
    console.log(b,'cont')
}

var n=10
for(var m=2;m<=n;m++){
    console.log('name user',m)
}


