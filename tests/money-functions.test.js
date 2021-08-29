const {formatCurrency, getCoins} = require('../src/js/money-functions.js');
//const {getCoins} = require('../src/js/money-functions.js');

describe("formatCurrency", () => {
  test("Given the amt 0 it returns $0.00", () => {
    let formatamt = formatCurrency(0);
    expect(formatamt).toEqual("$0.00");
  });

  test("Given the amt 1 it returns $1.00", () => {
    let formatamt = formatCurrency(1);
    expect(formatamt).toEqual("$1.00");
  });

  test("Given the amt 1.5 it returns $1.50", () => {
    let formatamt = formatCurrency(1.5);
    expect(formatamt).toEqual("$1.50");
  });

  test("Given the amt 0.01 it returns $0.01", () => {
    let formatamt = formatCurrency(0.01);
    expect(formatamt).toEqual("$0.01");
  });

  test("Given the amt 527.6789 it returns $527.68", () => {
    let formatamt = formatCurrency(527.6789);
    expect(formatamt).toEqual("$527.68");
  });

  test("Given the amt -1 it returns -$1.00", () => {
    let formatamt = formatCurrency(-1);
    expect(formatamt).toEqual("-$1.00");
  });

  test("Given the amt -2.3 it returns -$2.30", () => {
    let formatamt = formatCurrency(-2.3);
    expect(formatamt).toEqual("-$2.30");
  });

  test("Given the amt -2.6382 it returns -$2.64", () => {
    let formatamt = formatCurrency(-2.6382);
    expect(formatamt).toEqual("-$2.64");
  });
});

describe("getCoins", () => {
  test("32 cents gets: 1Q, 0D, 1N, 2P", () => {
    let change = getCoins(32);
    expect(change).toEqual('Quarters: 1, Dimes: 0, Nickels: 1, Pennies: 2');
  });

  test("10 cents gets: 0Q, 1D, 0n, 0P", () => {
    let change = getCoins(10);
    expect(change).toEqual('Quarters: 0, Dimes: 1, Nickels: 0, Pennies: 0');
  });

  test("27 cents gets: 1Q, 0D, 0n, 2P", () => {
    let change = getCoins(27);
    expect(change).toEqual('Quarters: 1, Dimes: 0, Nickels: 0, Pennies: 2');
  });

  test("68 cents gets: 2Q, 1D, 1n, 3P", () => {
    let change = getCoins(68);
    expect(change).toEqual('Quarters: 2, Dimes: 1, Nickels: 1, Pennies: 3');
  });
});