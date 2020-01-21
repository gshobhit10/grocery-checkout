const disc = require('../Asset/discounts');

let applied = false;
const AmountDiscount =  {
    checkDiscount (total) {
        if(total > disc.AmountDiscount.Total){
            const totalDiscount = Number(disc.AmountDiscount.Discount/100)*total;
            this.set(true);
            return totalDiscount
        }else {
            this.set(false);
            return total
        }
    },
    get () {
        return applied;
    },
    set(value){
        applied = value;
    }
}

export default AmountDiscount;