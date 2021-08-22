
  
 var oddEven=[42,4,6,7,3,3,2,67,8,4,3]
 var checkEven= oddEven.filter(function(value){
     return value%2===0
 })
console.log(checkEven)



checkOdd=  oddEven.filter(function(value){
     return value%2===1
 })
 console.log(checkOdd)



 var checkBig3=oddEven.filter(function(value){
     return value>8
 })
 console.log(checkBig3)



 function myFilter(array,callbackFu){
     var store=[]
     for(var i=0;i<array.length;i++){
         if(callbackFu(array[i])){
          store.push(array[i])
         }
     }
     return store
 }



 var a=[1,23,2,1,4,54,6,3,2,9,3,4]
 var show=myFilter(a,function(value){
        return value%2===0
 })
 console.log(show)



 var show1=myFilter(a,function(value){
     return value%2===1
 })
 console.log(show1)



 var show2=myFilter(a,function(value){
     return value<=9
 })
 console.log(a)
 console.log(show2)


 var abc=[,1,3,4,5,2,4,6,8,4,32]

 var last=abc.filter(function (value){
     return value>9
 })
 console.log(last)



 function ownFilter(array,callback){
     var mainStore=[]
     for(var a=0;a<array.length;a++){
         if(callback(array[a])){
          var subStore=array[a]
          mainStore.push(subStore)
         }
     }
     return mainStore
 }
 var final= ownFilter(abc,function(value){
     return value%2===0
 })
 console.log(final)



 function own(a,cb){
     var main=[]
     for(var b=0;b<a.length;b++){
         if(cb(a[b])){
             var sub=a[b]
             main.push(sub)
         }
     }
     return(main)
 }



 var cc=own(abc,function(value){
        return value>9
 })  
 console.log(cc)