import {createProduct, calcularStock, products} from './product.service'

createProduct({
  title: 'pro1',
  createdAt: new Date(1993, 1, 1),
  stock: 5
});
createProduct({
  title: 'Pro2',
  createdAt: new Date(1993, 1, 1),
  stock: 6,
  size: 'M'
});
products.push({
  title: 'Prod3',
  createdAt: new Date(1992, 1, 1),
  stock: 10
});

console.log(products);
const total = calcularStock();
console.log(total);
