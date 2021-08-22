
       //inner function (akta function er vitor jokhon r akta function deleclare korbo)

       function mainFunction(selut,fullName){
        function subFunction(){
            if(fullName){
                return fullName.split(' ')[0]
            }
            else{return ''}
        }
        var sms =selut+ ' ' +subFunction()
        console.log(sms)
    }

    mainFunction('assalamuyalaikum','tanvir ahmed')


    function mainFunction1(greet,nam){
        function subTwo(){
            if(nam){
                return nam.split(' ')[0]
            }else {return ' '}
        }
        var wellcome=greet+' '+subTwo()
        console.log(wellcome)
    }

  mainFunction1('how are you','tanvir ahmed')




  var name ='tanvir'
 console.log(name)
   function parestsFunction(){
    //   var name='ahmed'
      console.log(name)
       function childFunction(){
            name='ibne foysal'
          console.log(name)
       } 
       childFunction()
   }
   parestsFunction()
 


   
    
    function check(GiveNumber){
        function one(){ 
            return GiveNumber%3===0
        }

        function two(){
            return GiveNumber%5===0
        }

        if(one()&&two()){
            console.log('hello! your success number')
        }else{console.log('sorry this number not a valid')}
    }
    check(115)

    function main(anyNumber){
        function sub1(){
            return anyNumber%3===0
        }
        function sub2(){
            return anyNumber%5===0
        }
        if(sub1()&&sub2()){
            console.log('this is valid number',anyNumber)

        }else{console.log('not a valid number',anyNumber)}
    }
    main(15)

  