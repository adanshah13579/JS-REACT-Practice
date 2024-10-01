// The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function vocount(char) {
  const vo = "AEIOUaeiou";
  let vocount = 0;

  for (let i = 0; i < char.length; i++) {
    if (vo.includes(char[i])) {
      vocount++;
    }

    
  }
  return vocount;
}

const vo = "Adan shah";
const check = vocount(vo);
console.log(check);
