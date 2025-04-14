const obj = {
    rate: 1.2,
    getTotalAmount: function(amount) {
        return amount + amount * this.rate;
    },
    getDoubleRate(amount) {
        return amount + amount * (this.rate * 2)
    }
}

console.log(obj.getTotalAmount(1000))
console.log(obj.getDoubleRate(1000))