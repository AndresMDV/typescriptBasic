(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const login = (data: {email: string, password: number}) =>{
    console.log(data.email, data.password);
  }

//  login('andres@email.com', 123456789)
login({
  email: 'andres@mail.com',
  password: 123456789
});

const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) =>{
    products.push(data);
  }

  addProduct({
    title: 'pro1',
    createdAt: new Date(1993, 1, 1),
    stock: 12
  });
  addProduct({
    title: 'Pro2',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
    size: 'M'
  });
  console.log(products)





})();
