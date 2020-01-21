const disc = require('../Asset/discounts');

let applied = false;
const ItemizedDiscount =  {
    checkDiscount (quant) {
        if(quant > disc.BulkDiscount.Total || quant === disc.BulkDiscount.Total){
            const discountQuant = (Math.floor(quant/disc.BulkDiscount.Total))*disc.BulkDiscount.Discount;
            this.set(true);
            return discountQuant
        }else {
            this.set(false);
            return quant
        }
    },
    get () {
        return applied;
    },
    set(value){
        applied = value;
    }
}

export default ItemizedDiscount;