// The Asynchronous Shopper:
//    Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.


function placeOrder() {


  return new Promise((resolve)=>{

    const a = Math.floor(Math.random()+4000)+1000

    setTimeout(()=>{
      resolve("your order place successfully ")
    },a)
  })
  
}




async function procesOrder(params) {

try {
  const confirm=await placeOrder()

  console.log(confirm);
  
  
} catch (error) {
  console.log("error");
  
}

  
}

procesOrder()