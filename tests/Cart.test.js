const {Cart} = require('../src/js/cart');
const {Product} = require("../src/js/product");

describe("Cart", () => {
  test("check for empty array in the constructor", () => {
    const newItem = this.item;
    expect(newItem).toEqual(undefined);
  });

  test("add new taxed item to the cart", () => {
    const addProduct1 = new Cart();
    product = new Product("skirt", 24, true);
    addProduct1.addProd(product);
    expect(addProduct1.item).toEqual([{"name": "skirt", "price": 24, "tax": true}]);
  });

  test("add new non-taxed item to the cart", () => {
    const addProduct1 = new Cart();
    product = new Product("apple pie", 6, false);
    addProduct1.addProd(product);
    expect(addProduct1.item).toEqual([{"name": "apple pie", "price": 6, "tax": false}]);
  });

  test("add 2 items to the cart", () => {
    const addProduct2 = new Cart();
    product1 = new Product("shirt", 15, true);
    product2 = new Product("baklava", 24, false);
    addProduct2.addProd(product1);
    addProduct2.addProd(product2);
    expect(addProduct2.item).toEqual([{"name": "shirt", "price": 15, "tax": true}, {"name": "baklava", "price": 24, "tax": false}]);
  });

  test("add 3 items to the cart", () => {
    const addProduct2 = new Cart();
    product1 = new Product("pants", 25, true);
    product2 = new Product("baklava", 24, false);
    product3 = new Product("apple pie", 6, false);
    addProduct2.addProd(product1);
    addProduct2.addProd(product2);
    addProduct2.addProd(product3);
    expect(addProduct2.item).toEqual([{"name": "pants", "price": 25, "tax": true}, {"name": "baklava", "price": 24, "tax": false}, {"name": "apple pie", "price": 6, "tax": false}]);
  });

  test("get item count from the array - 2 items", () => {
    const addProduct3 = new Cart();
    product1 = new Product("shirt", 15, true);
    product2 = new Product("baklava", 24, false);
    addProduct3.addProd(product1);
    addProduct3.addProd(product2);
    let x = addProduct3.getItemCount();
    expect(x).toEqual(2);  
  });

  test("get item count from the array - 3 items", () => {
    const addProduct3 = new Cart();
    product1 = new Product("pants", 25, true);
    product2 = new Product("baklava", 24, false);
    product3 = new Product("apple pie", 6, false);
    addProduct3.addProd(product1);
    addProduct3.addProd(product2);
    addProduct3.addProd(product3);
    let x = addProduct3.getItemCount();
    expect(x).toEqual(3);  
  });

  test("Get the sub-total before the tax is added on: 2 items", () => {
    const addProduct4 = new Cart();
    product1 = new Product("shirt", 15, true);
    product2 = new Product("baklava", 24, false);
    addProduct4.addProd(product1);
    addProduct4.addProd(product2);
    let subTotal = addProduct4.getTotalBeforeTax();
    expect(subTotal).toEqual(39);
  });

  test("Get the sub-total before the tax is added on: 3 items", () => {
    const addProduct4 = new Cart();
    product1 = new Product("shirt", 15, true);
    product2 = new Product("baklava", 24, false);
    product3 = new Product("apple pie", 6, false);
    addProduct4.addProd(product1);
    addProduct4.addProd(product2);
    addProduct4.addProd(product3);
    let subTotal = addProduct4.getTotalBeforeTax();
    expect(subTotal).toEqual(45);
  });

  test("Get the total with tax: 2 items", () => {
    const addProduct5 = new Cart();
    product1 = new Product("shirt", 15, true);
    product2 = new Product("baklava", 24, false);
    addProduct5.addProd(product1);
    addProduct5.addProd(product2);
    let total = addProduct5.getTotalWithTax();
    expect(total).toEqual(40.5);
  });

  test("Get the total with tax: 3 items", () => {
    const addProduct5 = new Cart();
    product1 = new Product("shirt", 15, true);
    product2 = new Product("baklava", 24, false);
    product3 = new Product("apple pie", 6, false);
    addProduct5.addProd(product1);
    addProduct5.addProd(product2);
    addProduct5.addProd(product3);
    let total = addProduct5.getTotalWithTax();
    expect(total).toEqual(46.5);
  });

  test("Get the tax", () => {
    const addProduct6 = new Cart();
    product1 = new Product("shirt", 15, true);
    product2 = new Product("baklava", 24, false);
    addProduct6.addProd(product1);
    addProduct6.addProd(product2);
    let taxes = addProduct6.getTax();
    console.log(taxes);
    console.log(addProduct6.getTotalWithTax());
    console.log(addProduct6.getTotalBeforeTax());
    expect(taxes).toBeCloseTo(1.5);
  });

});