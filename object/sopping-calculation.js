
 var sopping=[
    {name:'shirt', price:700},
    {name:'pent', price:1000},
    {name:'clock', price:500},
    {name:'mds', price:1020}
]


var total=0
for(var item of sopping){
    total+=item.price
}
console.log(total)


      // or 

var t=0
for(var a=0;a<sopping.length;a++){
    var element=sopping[a]
    t=t+element.price
    console.log(t)
}
console.log(t)



var card=[
   {name:'shirt', price:700, quantity:3},
   {name:'pent', price:1000, quantity:3},
   {name:'clock', price:500, quantity:2},
   {name:'mds', price:1020,  quantity:1}
]



var total=0
for(var element of card){
   var into=element.price*element.quantity
   var total=total+into
}
console.log(total)



      // or

var result=0
for(var a=0;a<card.length;a++){
   var item=card[a]
   var into=item.price*item.quantity
   result=result+into
}
console.log(result)




const bazar=[
    {name:'dal', price:110, quantity:3},
    {name:'sugar', price:80, quantity:2},
    {name:'solto', price:40, quantity:2},
    {name:'tea', price:500, quantity:.5},
    {name:'milk', price:90, quantity:2}
]



let store=0
for(const perItem of bazar){
    let into=perItem.price*perItem.quantity
    store+=into
}

console.log(store)



     //  or

 let totals=0
 for(var a=0;a<bazar.length;a++){
      let multiply=bazar[a].price*bazar[a].quantity
      totals+=multiply
 } 
 console.log(totals)
