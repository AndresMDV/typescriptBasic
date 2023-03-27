(() => {
  let prices = [1,2,3,4,5,6, 'hola', true];
  // esto no se puede
  //prices.push('asas');
  //prices.push(true);
  //prices.push({});
  prices.push(12122112);

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean | Object)[] = ['hola', true];
  mixed.push(55);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);
  console.log(mixed)

  let numbers = [1,2,3,4,5,6];
  console.log(numbers)
  numbers.map(item => item*2);
  console.log(numbers)

})();
