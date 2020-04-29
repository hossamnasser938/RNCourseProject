export const dummyCategory1 = {
  title: 'Category1',
  imageUrl: 'https://reactjs.org/logo-og.png',
};

export const dummyCategory2 = {
  title: 'Category2',
  imageUrl: 'https://reactjs.org/logo-og.png',
};

export const dummyCategory3 = {
  title: 'Category3',
  imageUrl: 'https://reactjs.org/logo-og.png',
};

export const dummyCategory4 = {
  title: 'Category4',
  imageUrl: 'https://reactjs.org/logo-og.png',
};

export const dummyCategory5 = {
  title: 'Category5',
  imageUrl: 'https://reactjs.org/logo-og.png',
};

export const dummyCategory6 = {
  title: 'Category6',
  imageUrl: 'https://reactjs.org/logo-og.png',
};

export const dummyCategories = [
  dummyCategory1,
  dummyCategory2,
  dummyCategory3,
  dummyCategory4,
  dummyCategory5,
  dummyCategory6,
];

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
