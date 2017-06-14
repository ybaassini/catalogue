import { Product } from "../models/product.model";

let product1 = {
  productId: 1,
  url: 'https://scontent.cdninstagram.com/t51.2885-15/e35/19051854_113114422623575_8149456661816279040_n.jpg?se=7',
  description: 'Iphone 7 128gb etc',
  tags: [
      {
        name:'tag 1',
        tagId: 1
      },
      {
        name:'tag 2',
        tagId: 2
      }
   ],
  price: {
    amount: "457.99",
    priceId: 1
  },
  weight: 1.450,
  category: [
      {
        name:'apple',
        categoryId: 1
      },
      {
        name:'mobile device',
        categoryId: 2
      }
   ]
};

export let ProductMock1 = new Product();
Object.assign(ProductMock1, product1);

let product2 = {
  productId: 2,
  url: 'https://scontent.cdninstagram.com/t51.2885-15/e35/19051854_113114422623575_8149456661816279040_n.jpg?se=7',
  description: 'Samsung 128gb etc',
  tags: [
      {
        name:'tag 2',
        tagId: 2
      }
   ],
  price: {
    amount: 54.99,
    priceId: 1
  },
  weight: 1.8850,
  category: [
      {
        name:'samsung',
        categoryId: 3
      },
      {
        name:'mobile device',
        categoryId: 2
      }
   ]
};

export let ProductMock2 = new Product();
Object.assign(ProductMock2, product2);


let product3 = {
  productId: 3,
  url: 'https://scontent.cdninstagram.com/t51.2885-15/e35/19051854_113114422623575_8149456661816279040_n.jpg?se=7',
  description: 'Nokia 128gb etc',
  tags: [
      {
        name:'tag 1',
        tagId: 1
      }
   ],
  price: {
    amount: 6254.99,
    priceId: 1
  },
  weight: 14.050,
  category: [
      {
        name:'samsung',
        categoryId: 3
      },
      {
        name:'mobile device',
        categoryId: 2
      }
   ]
};

export let ProductMock3 = new Product();
Object.assign(ProductMock3, product3);

let product4 = {
  productId: 4,
  url: 'https://scontent.cdninstagram.com/t51.2885-15/e35/19051854_113114422623575_8149456661816279040_n.jpg?se=7',
  description: 'LG 128gb etc',
  tags: [
      {
        name:'tag 3',
        tagId: 3
      }
   ],
  price: {
    amount: 4.99,
    priceId: 1
  },
  weight: 0.050,
  category: [
      {
        name:'samsung',
        categoryId: 3
      },
      {
        name:'mobile device',
        categoryId: 2
      }
   ]
};

export let ProductMock4 = new Product();
Object.assign(ProductMock4, product4);

let product5 = {
  productId: 5,
  url: 'https://scontent.cdninstagram.com/t51.2885-15/e35/19051854_113114422623575_8149456661816279040_n.jpg?se=7',
  description: 'Iphone 5 128gb etc',
  tags: [
      {
        name:'tag 1',
        tagId: 1
      }
   ],
  price: {
    amount: 65.99,
    priceId: 1
  },
  weight: 11.00,
  category: [
      {
        name:'iphone',
        categoryId: 1
      },
      {
        name:'mobile device',
        categoryId: 2
      }
   ]
};

export let ProductMock5 = new Product();
Object.assign(ProductMock5, product5);



let product6 = {
  productId: 6,
  url: 'https://scontent.cdninstagram.com/t51.2885-15/e35/19051854_113114422623575_8149456661816279040_n.jpg?se=7',
  description: 'Samsung 128gb etc',
  tags: [
      {
        name:'tag 1',
        tagId: 1
      }
   ],
  price: {
    amount: 749,
    priceId: 1
  },
  weight: 10,
  category: [
      {
        name:'samsung',
        categoryId: 3
      },
      {
        name:'mobile device',
        categoryId: 2
      }
   ]
};

export let ProductMock6 = new Product();
Object.assign(ProductMock6, product6);