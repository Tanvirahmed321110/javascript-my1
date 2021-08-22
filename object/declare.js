 var laptop={
      model:'12321,des',
      ip:32354322,
      ram:'4gb',
      rom:'1 tera byte',
      price:48000
 }

 console.log(laptop)
 var ip=laptop.ip
 console.log(ip)
 console.log(laptop.price) 
 laptop['rom']=1.5
 console.log(laptop['ram']='6 GB')

  var mobile={model:'xaomi9',
              price:12000,
              ram:'4gb',
              rom:64}

console.log(mobile)


var rom=mobile.rom
console.log(rom)
console.log(mobile.ram)

   // property er value update korte hole (3 vabe kora jay)
    mobile.price='15000 taka only'  // 1
    mobile['price']='15500 taka'    // 2
    var newprice='price'            //3
    mobile[newprice]=14500
    console.log(mobile.price)
   

    console.log(mobile.price)

    mobile.rom=128
    mobile['rom']=264
    console.log(mobile)
    console.log(laptop)


    var lastTry={
         match:'win bangladesh 10 runs',
         power:6,
         lastP:'no',
         break:'10 minuts'

    }
    
     console.log(lastTry)
     var match=lastTry.match
     console.log(match,',this result is 1st t-20')
     console.log(lastTry.break)

     lastTry.break='12,minuts'
     lastTry['break']='12 minuts break'
     var matchBreak='power'
        lastTry[matchBreak]=10
        console.log(lastTry)



        var mainBoller='mustafiz'

       
        //object constructor
        // 1. vabe
        var pen =Object()
        pen.color='black'
        pen.price=10
        console.log(pen)
        
        
        //2. vabe
        var obj2=new Object()
        obj2.pro1=10
        obj2.pro2=20
        obj2.pro3=30
        console.log(obj2)

      

       

        