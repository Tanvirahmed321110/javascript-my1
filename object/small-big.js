
 var mobiles=[
    {name:'nokia', price:8000, ram:2, rom:16, cemara:'10mPx'},
    {name:'xaomi', price:13000, ram:3, rom:32, cemara:'12mpx'},
    {name:'htx', price:7600, ram:3, rom:8, cemara:'12mpx'},
    {name:'vivo', price:11000, ram:3, rom:32, cemara:'9mpx'}
]

var small=mobiles[0]
for(var mobile of mobiles){
   if(mobile.price<small.price){
       small=mobile
   }
}
console.log(small)

let komdam=mobiles[0]
for(var a=0;a<mobiles.length;a++){
   var mobile=mobiles[a]
   if(mobile.price<komdam.price){
       komdam=mobile.price
   }
}
console.log(komdam)

var low=mobiles[1]
for(var i=0;i<mobiles.length;i++){
   var element=mobiles[i]
   if(element.price>low.price){
       low=element
   }
   
}
console.log(low)

var s=mobiles[0]
for(var mobile of mobiles){
   if(mobile.price<s.price){
       s=mobile
   }
}
console.log(s)

const laptops=[
  { name:'hp',price:432000,ram:4},
  {name:'dell',price:54443,rm:6},
  {name:'lenvo',price:50443,rm:6},
  {name:'apple',price:5143,rm:6},
  {name:'walto',price:52743,rm:6},
]



var small=laptops[3]
for(const laptop of laptops){
   if(laptop.price<small.price){
       small=laptop
   }
}
console.log(small)



var big=laptops[1]
for(const laptop of laptops){
   if(big.price<laptop.price){
       big=laptop
   }
}
console.log(big);



var kom=laptops[2]
for(var a=0;a<laptops.length;a++){
   var element=laptops[a]
   if(element.price<kom.price){
       kom=element
   }
}
console.log(kom)



var besi=laptops[3]
for(var b=0;b<laptops.length;b++){
   var laptop=laptops[b]
   if(laptop.price>besi.price){
       besi=laptop
   }
}
console.log(besi)




//     function

function objectSmall(array){
   var small=array[0]
   for(var a=0;a<array.length;a++){
       var element=array[a]
       if(element.price>small.price){
           return small=element
       }
   }
}
var ch=objectSmall(mobiles)
console.log(ch)