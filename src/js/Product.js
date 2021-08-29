
  
  class Product {
    constructor(name, someNum, someBoo) {
      this.name = name;
      this.price = someNum;
      this.tax = someBoo;
    }
  
    getPriceTaxed() {
      if(this.tax === true) {
        return this.price * 1.10;
      }
      else {
        return this.price;
      }
    }
  }
  
  module.exports = {Product};