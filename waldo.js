var empty = []
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      empty.push(i)
      found();
    }
  }
}
function actionWhenFound(arr) {
      console.log("Found him at index " + empty);
    }

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);