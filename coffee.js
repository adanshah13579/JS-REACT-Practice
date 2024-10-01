// In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.




function brewCoffee(params) {


  return new Promise((resolve)=>{
        const time=Math.floor(Math.random()*4000)+1000
    setTimeout(()=>{
            resolve("enjoy your coffee and day")
    },time)
  })
  
}

async function Coffee(params) {


  try {

    const  result = await brewCoffee()
 console.log(result);
 
    
  } catch (error) {
    console.log("error");
    
    
  }
  
}

Coffee()