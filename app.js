function sumArray(array) {
  let mayor = array[0];
  let menor = array[0];
  for (let i = 1; i < array.length; i++) {
    if (mayor < array[i]) {
      mayor = array[i];
    }
    for (let j = 1; j < array.length; j++) {
      console;
    }
  }
  console.log(mayor);
}

console.log(sumArray([2, 3, 5, 7, 88, 2, 4, 6]));
