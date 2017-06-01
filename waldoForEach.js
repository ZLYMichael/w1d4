var empty = []
function findWaldo(arr, found) {
  arr.forEach(function(name, index) {
    if(name === "Waldo") {
      empty.push(index)
      found()
    }
    return empty;
  });
}
//   for (var i = 0; i < arr.length; i++) {
// //     if (arr[i] === "Waldo") {
// //       empty.push(i)
// //       found();
// //     }
// //   }
// // }
function actionWhenFound() {
      console.log("Found him at index " + empty);
    }

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);