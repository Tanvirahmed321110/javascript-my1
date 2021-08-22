
 for(var a=0; a<4; a++){
    var random=Math.random()*10
    var num=Math.round(random)
    console.log(num)
}

var main=[]
for (var a=0;a<5;a++){
   var rand=Math.random()*50
   var round=Math.round(rand)
   if(main.indexOf(round)==-1){
       main.push(round)
   }
 else{console.log(main,round)}
} 
console.log(main)

var store=[]
for (var a=0;a<5;a++){
    var rand=Math.random()*55
    var round=Math.round(rand)
    if(store.indexOf(round)==-1){
        store.push(round)
    }
    else{console.log(store,round)}

}
console.log(store)

