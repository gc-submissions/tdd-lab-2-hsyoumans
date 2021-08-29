
function formatCurrency(amount){
    
    if(amount >= 0) {
        amount = ("$" + amount.toFixed(2));
    }
    else if (amount < 0){
        amount = Math.abs(amount);
        amount = ("-$" + amount.toFixed(2));
    }
    return amount;
};



function getCoins(cents) {
    const qrt = 25;
    const dm = 10;
    const nkl = 5;
    const pny = 1;

    let q = 0;
    let d = 0;
    let n = 0;
    let p = 0;
    let x = 0;

    q = Math.floor(cents/qrt);
    x = q * qrt;
    cents -= x;
    d = Math.floor(cents/dm);
    x = d * dm;
    cents -= x;
    n = Math.floor(cents/nkl);
    x = n * nkl;
    cents -= x;
    p = cents;
    return "Quarters: " + q + ", Dimes: " + d + ", Nickels: " + n + ", Pennies: " + p;
    
};



module.exports = {formatCurrency, getCoins};
//module.exports = {getCoins};