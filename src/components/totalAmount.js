import { data } from '../data';
let total = document.getElementById('summary');
export function totalAmount () {
    let totalSum = 0;
    for (let i = 0; i < data.items.length; i++) {
        let _item = data.items[i];
        let _totalCP = _item.amount * _item.pairCount;
        totalSum += _totalCP - (_totalCP/100 * _item.discount);
    }
    console.log(totalSum);

    total.innerHTML = `
        <div class="shipping-left">Free 2 Day Shipping</div>
        <div class="shipping-Right">Total : <span class="bold-600"> DKK ${totalSum}</span> </div>
    `;
}


    
