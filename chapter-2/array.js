 
 var team=['tamim','sakib','musfik','mahamudulla','tasin']
 team[4]='mustafiz'
 console.log(team.length)
 console.log(team)



 var arr=[32,32,43,5,6,7]
 arr[6]=8           //new data add korlam  [index number ta] = value
 arr[1]=33
 arr[0]=30
 arr[10]=12
 
 console.log(arr)
 console.log(arr.length)

 for(var i=0; i<arr.length; i++){
     console.log(arr[i])
 }

 for(var a=0; a<team.length; a++){
     console.log(team[a])
 }


 var newData=[1,2,3,4,6,7,8,3,4,6,7,]

 for (var b=0; b<newData.length; b++){
     console.log(newData[b])
 }



 var newDat=[1,2,3,4,6,7,8,3,4,6,7,]

 for (var z=0; z<newDat.length; z++){
     newDat[z] +=50
     console.log(newDat[z])
     
 }



  //jokfoul
  var abc=[1,2,3,4,5,6]
  var total=0
  for(var q=0; q<abc.length;q++){
      total=total+abc[q]
      console.log(total)
  }



  //odd number ber korar

  for (var i=-0; i<abc.length; i++){
      if(abc[i]% 2===1){
          console.log(abc[i])
      }
  }
 


  //even number

  for(var a=0; a<abc.length;a++){
      if(abc[a]%2===0){
          console.log(abc[a])
      }
  }

  var narr=[21,121,4,5,48,9,2]
  var indexCont= narr[2]
  console.log(indexCont)

  var elem=narr.indexOf(121)
  console.log(elem)
             

                /// push and pop
  narr [1]=22
  console.log(narr.push('tamin'))
  console.log(narr.push('sakib'))
  narr.pop('')
  narr.unshift('shamim')
  narr.unshift('iq b')
  narr.shift()
  narr.push('musfik')
  console.log(narr)



  var asd=[1,2,3,4,5,6]
  for(var a=0; a<asd.length; a++){
       var asdLineOutput=asd[a]
       console.log(asd[a])
       if(asdLineOutput>=3){
           
            break;
       }
  }

  console.log(asd.indexOf(4))    //index number ber kora jonno
  console.log(asd[5]=7)          //replace er jonno
  var rep=asd[0]=10              // ai vabe o replace kora jay
  console.log(asd)




  var a=1
  while(a<=20){
       console.log('number',a)
       if(a===10){
            break;
       }
       a++
  }

  


   for(var q=0; q<=30; q++){
        console.log('print',q)
        if(q===13){
             console.log('given 13 number')
             break;
        }
   }