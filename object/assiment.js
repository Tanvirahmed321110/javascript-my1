  
  // (1)
  function seerToMon(giveSeer){
    if(typeof giveSeer !='number'){
        return 'sorry ,, please give any positive number'
    }
    let calculation=giveSeer/40
    return calculation
}
const check=seerToMon(87)
console.log(check)





   //(2)
function totalSales(shirt,pent,shoes){
    if(typeof shirt !='number' ||  typeof pent !='number' ||  typeof shoes !='number'){
        return 'please give any positive number'
    }
    if(shirt <0 || pent<0 || shoes<0){
        return 'please give positive number and geterthan 0'
    }
    
  
    let result1 = shirt*100
    let result2 = pent*200
    let result3 = shoes*500
    let finalResult=result1+result2+result3
    return finalResult
}
const show=totalSales(2,2,09)
console.log(show)





  //  (3)
  function delivaryCost(quantity){
     if(typeof quantity !='number'){
         return 'sorry this is not a number please give number positeve'
     }
     if(quantity<0){
         return 'please give any positive number'
     }

      if(quantity<=100){
          let first100=quantity*100
          return first100
      }
      else if(quantity<=200){
          var first100=100*100
          var second100=quantity-100
          var second100Into=second100*80
          var finallyResult=first100+second100Into
          return finallyResult
      }
      else {var first100=100*100
            var second100=100*80
            var third100=quantity-200
            var third100Into=third100*50
            var finallyResult=first100+second100+third100Into
            return finallyResult
      }
  }
  const result=delivaryCost(32)
  console.log(result)




  // (4)
  let nameOfFriend=['sadek','tanvir','sakib','alal','sdek','babu']
  function perfectFriend(array){
        let store=[]
        for(var a=0;a<array.length;a++){
            let element=array[a]
            if(array[a].length===5){
                store=element
            }
        }
        return store
  }
   const output=perfectFriend(nameOfFriend)
   console.log(output)

 