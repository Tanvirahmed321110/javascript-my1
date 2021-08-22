
var time= new Date()
console.log(time.toDateString())
console.log(time.toTimeString())
console.log(time.getFullYear())
console.log(time.getDate())
console.log(time.getHours())
console.log(time.getMonth())
console.log(time.getDay())
console.log(time.getUTCMinutes())
console.log(time.getUTCMilliseconds())
console.log(time.toLocaleDateString())
console.log(time.toLocaleString())

  var date=new Date()
  var today=date.getDay()

  switch(today){
      case 0: console.log('today is sun')
      break;
      case 1:console.log('mon')
      break;
      case 2:console.log('today is tue')
      break;
      case 3:console.log('wed')
      break;
      case 4:console.log('thir')
      break;
      case 5:console.log('fri')
    break;
    case 6:console.log('sat')
    break;  }
