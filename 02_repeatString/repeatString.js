const repeatString = function(string,num) {
  if (num < 0) return `ERROR`;
 let stringRepeated = '';
  while(num > 0){
  stringRepeated += string;
  num--;
 }
 return stringRepeated;
};

// Do not edit below this line
module.exports = repeatString;
