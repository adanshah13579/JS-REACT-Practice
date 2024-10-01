
// Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.


function ad(num) {

  return num.map(n=>{return new Promise((resolve)=>{setTimeout(()=>{
    resolve(n*2)

  },5000)})})
  
}


let num=[1,2,3,4,5,6]

async function doub() {

  const pro=ad(num)


  result = await Promise.all(pro)



 console.log(result);
  
  
}

doub()
