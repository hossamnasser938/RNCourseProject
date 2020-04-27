export const dummyCategory = {
  title: 'Category',
  imageUrl: 'https://reactjs.org/logo-og.png',
};

export const dummyProductWithDiscount = {
  title: 'Product',
  imageUrl: 'https://reactjs.org/logo-og.png',
  price: 100,
  discount: 0.2,
  description: 'A very mnice product, bla bla bla ...',
};

export const dummyProductWithoutDiscount = {
  title: 'Product',
  imageUrl: 'https://reactjs.org/logo-og.png',
  price: 100,
  description: 'A very mnice product, bla bla bla ...',
};

export const dummyCartItem = {
  product: dummyProductWithDiscount,
};

export const dummyOrder = {
  cartItems: [dummyCartItem],
  cost: 150,
  status: 'PLACED',
};
