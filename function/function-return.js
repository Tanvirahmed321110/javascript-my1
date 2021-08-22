 function returnTry(nam,emaill,age,ph){
         return{
             name:nam,
             mail:emaill,
             year:age,
             Mobile:ph
         }
     }

     var check=returnTry('tanvir ahmed','tanvirahmed32110@gmail.com1',21,018393)
     console.log(check)


        // function expression
        //(jokhon kono function ke variable er vitor store kore rakha jay .tokhon take expression bole . ai khetre function er name dite hy na .variable er nam dile hy)

       let express=function (a,b,c){  //function er nam na dile take annonimash fun:bole
            let ab=a+b
            return ab*c
       }

       let call=express(10,10,3)
       console.log(call)
       console.log('check now',express(2,1,3,))

       // set time out (asinconas)
       setTimeout(function()  {
            console.log('check set time out now')
            console.log('just , 1 second after show this code')
       }, 1000);


