var words = ["ground", "control", "to", "major", "tom"];

function map(array, cb) {
  var num = [];
  for(var i = 0; i < array.length; i++) {
    num.push(array[i].length)
  }
  return num
};


var result = map(words, function(word) {
  return word.lencgth;
});
console.log(result)
