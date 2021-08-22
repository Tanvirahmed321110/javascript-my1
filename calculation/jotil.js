
 function salutCount(miles){
    if(miles<=10){
       return  miles*10
    }
    else if(miles<=20){
        const first10=10*10
        const second=miles-10
        const secondCount=second*20
        const total = first10+secondCount
        return total
    }
    else if(miles<=30){
        const first10=10*10
        const third=miles-20
        const secondTotal=20*10
        const thirdCount=third*25
        const total=first10+secondTotal+thirdCount
        return total
    }
  }
  const check=salutCount(26)
  console.log(check)
 
 
 
 
  function incriment(salay){
    if(salay<=10){
        return salay*3
    }
    else if(salay<=20){
        const first10=10*3
        const second=salay-10
        const secondCount=second*5
        const total=first10+secondCount
        return total
    }
    else if (salay<=30){
        const first10=10*3
        const second10=10*5
        const third=salay-20
        const thirdCount=third*6
        const total=first10+second10+thirdCount
        return total
    }
    else{
        const first10=10*3
        const second10=10*5
        const third10=10*6
        const last=salay-30
        const lastCount=last*7
        const total=first10+second10+third10+lastCount
        return total
    }
  }
  const c=incriment(40)
  console.log(c)