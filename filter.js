// <!-- The Array Filterer:
//     You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion. -->


function filterproduct(pro,category) {

    const[key,value]=Object.entries(category)[0]

    return pro.filter((p)=>{

        return p[key]===value
    })
    
}

const products = [
  {
    item: "ad",
    category: "electronic",
  },
  {
    item: "ad",
    category: "electronic",
  },
  {

    item:"d",
    category:"furniture",
}
];

const filter= filterproduct(products,{category:"electronic"})

console.log(filter);




