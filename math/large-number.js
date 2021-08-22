 var number1=2
 var bb=119
 var cc=342
           
            //bigest number

 if(number1>bb&&number1>cc){
     console.log('number1 is highest number-',number1)
 }
 else if(bb>number1&&bb>cc){
     console.log('bb is highest number-',bb)
 }
 else{console.log('cc is highest number-',cc)}


             
              //small number
              if(bb<cc){
                console.log('111small number-',bb)
            }else{console.log('111small num-',cc)}
            
            
            


 if(number1<bb&&number1<cc){
    console.log('number1 is samall number-',number1)
 }
 else if(bb<number1&&bb<cc){
    console.log('bb is samall number-',bb)
 }
 else if(cc<bb&cc<number1){
    console.log('cc is samall number-',cc)
 }


   
   //      max or min number
  var tanvirPoint=4.83
  var habibPoint=4.56
  var sanisPoint=5.00

  var checkMax=Math.max(tanvirPoint,habibPoint,sanisPoint)
  console.log('maximam number-',checkMax)
  console.log('minuam number-',Math.min(tanvirPoint,habibPoint,sanisPoint))




  //  small number ber korar - funcition 

   function min2Number(num1,num2){
       if(num1<num2){
           return num1
       }return num2
   }

   var result=min2Number(1239,4313)
   console.log(result)

   function min3Number(a,b,c){
       if(a<=b&&a<=c){
           return console.log(a,'is small number')
       }
       else if(b<=a&&b<=c){
           return console.log(b,'is small number')
       }
       else{return console.log(c,'is small number')}
   }

   min3Number(21,43,6,)
   min3Number(1,2,2)




   function FourNumberSmall(a,b,c,d){
       if(a<=b && a<=c && a<=d){
           return a
       }else if(b<=a&& b<=c && b<=d){
           return b
       }
       else if(c<=a && c<=b && c<=d){
           return c
       }
       else{ return d
       }
   }

   console.log( 'small number-',FourNumberSmall(11,10,3,2))
   var check=FourNumberSmall(12,243,4,6)
   console.log(check)



    // big number ber korar funciton

    function maxNumber(z,x){
        if(z>=x){
            return z
        } return x
    }

    console.log(maxNumber(112,13))

    function fourMaxNumber(z,x,c,v){
        if(z>x && z>c && z>v){
            return console.log(z,'is bigest number')
        }
         else if(x>z &&  x>c && x>v){
            return console.log(x,'is bigest number')
         }
          else if (c>z && c>x && c>v){
            return console.log(c,'is bigest number')
          }
           else{  return console.log(v,'is bigest number')}
    }

   fourMaxNumber(173,113,32,3)



               // condition 2 number to big
    let tamim=1234
    let sakib=499
  
    if (tamim>sakib){
      console.log('tamin runs much',tamim)
    }
    else{console.log('sakib runs much',sakib)
    }
     

   
            
               // condition 2 number to big
    var mobilePrice=1213
    var laptopPrice=1209
    var tabPrice=12000

    if (mobilePrice>laptopPrice&&mobilePrice>tabPrice){
      console.log('mobile Price is highest-',mobilePrice)
    }

    else if(laptopPrice>mobilePrice&&laptopPrice>tabPrice){
      console.log('laptop price is -highest',laptopPrice)
    }
    else{console.log('tab price is highest-',tabPrice)}

    
    
 

     let twoArray=[12,3,4,61,1,23]
     let sum=0
     for(let i=0; i<twoArray.length; i++){
         sum +=twoArray[i]
        //  console.log(twoArray[i])
         console.log(sum)
     }console.log(sum)

     function anyArraySum(giveArray){
        let totalSum=0 
        for(let a=0;a<giveArray.length; a++){
            totalSum+=giveArray[a]
        } return console.log('total',totalSum)
     }

     let ad=[234,54,46,75,3]
     let as=[32,4,6,22,23,]
     let ass=(12,342121,3)
     anyArraySum(ass)
     anyArraySum(ad)
     anyArraySum(as)
    

      
     function addAll(){
         let sum=0
         for(let a=0;a<arguments.length;a++){
             sum+=arguments[a]
            
         }console.log(sum)
         console.log(arguments)
     }

     addAll(12,12)

    
     
     //array te large er number ber korar 
      // bigest number in array

 function bigestInArray(array){
    var big=0
    for(var a=0;a<array.length;a++){
     if(array[a]>big){
         big=array[a]
     }
    }
    console.log(big)
}
bigestInArray(arr)

function bigArrElemts(anyArray){
    var bigNumber=0
    for(var i=0;i<anyArray.length;i++){
    var elements=anyArray[i]
    if(elements>bigNumber){
        bigNumber=elements
    }
    }
    return console.log(bigNumber)
}
bigArrElemts(arr2)


   //big number to array 
     var abc=[3,4,6,7,]
var big=0
for(var a=0;a<abc.length;a++){
     var element=abc[a]
     if(element>big){
         big=element
     }
}

console.log(big)




   //big number to array  (function)

function bigNumberToArray(array){
    var bigNum=0
    for(a=0;a<array.length;a++){
        var element=array[a]
        if(element>bigNum){
            bigNum=element
        }
    }
    return  bigNum
}

var check=bigNumberToArray(arr)
console.log(check)

var check=bigNumberToArray(arr2)
console.log(check)



// small number ber korar 

var roll=[21,1,2,43,5,2,0]
var small=roll[0]
for(var a=0;a<roll.length;a++){
    var elements=roll[a]
    if(elements<small){
        small=elements
    } 
    
}
console.log(small)


abc=[2,3,5,6,78,122,22]
var smal=abc[0]
for(var a=0;a<abc.length;a++){
    if(abc[a]<smal){
        smal=abc[a]
    }
}
console.log(smal)

  // small number ber korar program
  
  function smalln(array){
      var sm=array[0]
      for(var a=0;a<array.length;a++){
           if(array[a]<sm){
               sm=array[a]
           }
      }
      return console.log(sm,'small nu')
  } 
  smalln(abc)  
 