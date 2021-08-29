const {Product} = require('../src/js/product');

describe("Product", () => {
  test("sets properties on class", () => {
    expect(new Product("Coco", 1234, true)).toEqual({"name":"Coco", "price": 1234, "tax": true});
    expect(new Product("Bandit", 1, false)).toEqual({"name":"Bandit", "price": 1, "tax": false});
  });

  test('taxable product returns price * 1.10', () => {
    const taxProduct = new Product('shirt', 12, true);
    expect(taxProduct.getPriceTaxed()).toBeCloseTo(13.2);

    const taxProduct2 = new Product('pants', 30, true);
    expect(taxProduct2.getPriceTaxed()).toBeCloseTo(33);
  });
});

