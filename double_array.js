
function dounblearray(arr) {

  if (arr.length===0 ) return [];

  let result= []
  result.push(arr[0]*2)

  for (let i = 1; i < arr.length; i++) {
    if (arr[i]!==arr[i-1]) {
       result.push(arr[i]*2)
    } else {
      result.push(arr[i])
    }
    
  }
  return result
}

let ar=[1,1,1,2,2,2,3,4,5,6]

let resultt=dounblearray(ar)

console.log(resultt)