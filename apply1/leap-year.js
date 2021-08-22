
  function checkLeapYear(anyYear){
    if((anyYear %4===0) && (anyYear %100 !=0)|| (anyYear %400===0)){
     return true
    }
    return false
}



  const year=2034
  const checking=checkLeapYear(year)
  console.log('this year is leap year--',checking)
  const a=checkLeapYear(2024)
  console.log('this year is leap year--',a)
  console.log(checkLeapYear(2100))



  function checkLeapYears(anyYear){
    if((anyYear %4===0) && (anyYear %100 !=0)|| (anyYear %400===0)){
    return console.log(anyYear,'is leap year')}

     else{ return  console.log(anyYear,'is not leap year')
    }
}

 checkLeapYears(2100)
 checkLeapYears(2200)
 console.log(checkLeapYears(2024))
 const yr=checkLeapYears(2029)
 console.log(yr)