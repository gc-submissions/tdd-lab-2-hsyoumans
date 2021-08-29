const {Product} = require("./product");

//var x = 0;
//var subTotal = 0;
//var total = 0;
//var tax = 0;

class Cart {
    constructor() {
        this.item = [];
    }
    addProd(product) {
        this.item.push(product);
    }
    getItemCount() {
        let x = this.item.length;
        return x;
    }
    getTotalBeforeTax() {
        let subTotal = 0;
        let amt = 0;
        for (let i = 0; i < this.item.length; i++) {
           amt = this.item[i].price;
           subTotal = subTotal + amt;
        }
        return subTotal;
    }
    getTotalWithTax() {
        let total = 0;
        for (let i = 0; i < this.item.length; i++) {
            let x = 0;
            x = this.item[i].getPriceTaxed();
            total = total + x;
        }
        return total;
    }
    getTax() {
        let x = this.getTotalWithTax();
        let y = this.getTotalBeforeTax();
        let tax = (x - y);
        return tax;
    }
};



module.exports = {Cart};