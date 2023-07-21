anagram = (a, b) => {
   let string1 = a.split('').sort().join('').toLowerCase();
   let string2 = b.split('').sort().join('').toLowerCase();
   return (string1 === string2)
   } 
console.log(anagram('something', 'msohtng' ));
console.log(anagram('alas', 'sala' ));

reverseInteger = (num) => {
    return parseInt(num.toString().split('').reverse().join(''))
}

console.log(reverseInteger(-4389));
