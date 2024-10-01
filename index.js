let s=["ad","ada","adan","murad "]

const house=[]

for(let ss of s){

if(ss.length<3){

  house.push("add")
}else if (ss.length<4) {
  house.push("adaaaa")
}else if (ss.length<5) {
  house.push("adann")
}else{
  house.push("muradd")
}

console.log(`${ss}==>${house}`);
}



