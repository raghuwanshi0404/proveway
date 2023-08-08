import { data } from '../data';
export const Carts = function () {
    let _carts = document.getElementById('cards-section');
    let _cartsStr = '';
    for (let i = 0; i < data.items.length; i++) {
        let _item = data.items[i];
        let _initialState = `
            <div class="card">
                <div class="card-sec-1 centre-vr">
                    <div class="sec-1-left centre-vr centre-hr">
                        <input type="radio" id="${_item.id}-rdo" class="rad-btn" name="${_item.id}" value="">
                    </div>
                    <div class="sec-1-right">
                        <div class="sec-1-sec my-1 space-btw centre-vr">
                            <div>${_item.pairCount} Pair</div>
                            <div class="popular">${_item.isMostPopular ? 'Most Popular': ''}</div>
                        </div>
                        <div class="sec-1-sec bold-600 mb-1 space-btw centre-vr">
                            <div>${data.currency} ${_item.amount}</div>
                            <div>${_item.discount}% off</div>
                        </div>
                    </div>
                </div>
                <div class="detail" id="${_item.id}" style="display: none">${helperFunc(_item.pairCount)}</div>
            </div>
        `;

        _cartsStr += _initialState;
    }
    _carts.innerHTML = _cartsStr;
}

const expandCard = function(id) {
    const elementCard = document.getElementById(id);
    const radioElement = document.getElementById(id + '-rdo');
    radioElement.checked = true;
    elementCard.parentElement.classList.add('active');
}

const collapseAll = function() {
    for (let i = 0; i < data.items.length; i++) {
        const radioElement = document.getElementById(data.items[i].id + '-rdo');
        const element = document.getElementById(data.items[i].id);
        radioElement.checked = false;
        element.parentElement.classList.remove('active');
    }
}

export const registerEventListener = function() {
    document.querySelectorAll('.rad-btn').forEach(item => {
        item.addEventListener('click', event => {
            collapseAll();
            expandCard(event.target.name);
        })
    })
}

function helperFunc(pairCount) {
    let _dropdownStr = '';
    for (let i = 0; i < pairCount; i++) {
        let _dropdownRow = `
            <div class="card-sec-2 centre-vr">
                <span>#${i + 1}</span>
                <div class="card-dropdown-ctn flex-col-dir">
                    <label for="size">Size</label>

                    <select name="size" id="size">
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    </select>
                </div>
                <div class="card-dropdown-ctn flex-col-dir">
                    <label for="color">color</label>

                    <select name="color" id="color">
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    </select>
                </div>
            </div>
        `;
        _dropdownStr += _dropdownRow;
    }

    return _dropdownStr;
}














    
  