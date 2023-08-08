"use strict";
(self["webpackChunkproveway"] = self["webpackChunkproveway"] || []).push([["src_bootstrap_js"],{

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _components_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/banner */ "./src/components/banner.js");
/* harmony import */ var _components_carts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/carts */ "./src/components/carts.js");
/* harmony import */ var _components_actionbtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/actionbtn */ "./src/components/actionbtn.js");
/* harmony import */ var _components_totalAmount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/totalAmount */ "./src/components/totalAmount.js");






function init() {
  (0,_components_banner__WEBPACK_IMPORTED_MODULE_2__.Banner)();
  (0,_components_carts__WEBPACK_IMPORTED_MODULE_3__.Carts)();
  (0,_components_actionbtn__WEBPACK_IMPORTED_MODULE_4__.actionBtn)();
  (0,_components_carts__WEBPACK_IMPORTED_MODULE_3__.registerEventListener)();
  (0,_components_totalAmount__WEBPACK_IMPORTED_MODULE_5__.totalAmount)();
}
window.addEventListener('load', event => {
  init();
});

/***/ }),

/***/ "./src/components/actionbtn.js":
/*!*************************************!*\
  !*** ./src/components/actionbtn.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actionBtn: () => (/* binding */ actionBtn)
/* harmony export */ });
const actionBtn = function () {
  let _actionBtn = document.getElementById('action-btn');
  _actionBtn.innerHTML = `<div class="add"> + Add to Cart </div> `;
};

/***/ }),

/***/ "./src/components/banner.js":
/*!**********************************!*\
  !*** ./src/components/banner.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Banner: () => (/* binding */ Banner)
/* harmony export */ });
const Banner = function () {
  let _bannerHTML = document.getElementById("page-title");
  _bannerHTML.innerHTML = `
        <div class="textCover"></div>
        <div class="text"> Bundle & Save</div>`;
};

/***/ }),

/***/ "./src/components/carts.js":
/*!*********************************!*\
  !*** ./src/components/carts.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Carts: () => (/* binding */ Carts),
/* harmony export */   registerEventListener: () => (/* binding */ registerEventListener)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./src/data.js");

const Carts = function () {
  let _carts = document.getElementById('cards-section');
  let _cartsStr = '';
  for (let i = 0; i < _data__WEBPACK_IMPORTED_MODULE_0__.data.items.length; i++) {
    let _item = _data__WEBPACK_IMPORTED_MODULE_0__.data.items[i];
    let _initialState = `
            <div class="card">
                <div class="card-sec-1 centre-vr">
                    <div class="sec-1-left centre-vr centre-hr">
                        <input type="radio" id="${_item.id}-rdo" class="rad-btn" name="${_item.id}" value="">
                    </div>
                    <div class="sec-1-right">
                        <div class="sec-1-sec my-1 space-btw centre-vr">
                            <div>${_item.pairCount} Pair</div>
                            <div class="popular">${_item.isMostPopular ? 'Most Popular' : ''}</div>
                        </div>
                        <div class="sec-1-sec bold-600 mb-1 space-btw centre-vr">
                            <div>${_data__WEBPACK_IMPORTED_MODULE_0__.data.currency} ${_item.amount}</div>
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
};
const expandCard = function (id) {
  const elementCard = document.getElementById(id);
  const radioElement = document.getElementById(id + '-rdo');
  radioElement.checked = true;
  elementCard.parentElement.classList.add('active');
};
const collapseAll = function () {
  for (let i = 0; i < _data__WEBPACK_IMPORTED_MODULE_0__.data.items.length; i++) {
    const radioElement = document.getElementById(_data__WEBPACK_IMPORTED_MODULE_0__.data.items[i].id + '-rdo');
    const element = document.getElementById(_data__WEBPACK_IMPORTED_MODULE_0__.data.items[i].id);
    radioElement.checked = false;
    element.parentElement.classList.remove('active');
  }
};
const registerEventListener = function () {
  document.querySelectorAll('.rad-btn').forEach(item => {
    item.addEventListener('click', event => {
      collapseAll();
      expandCard(event.target.name);
    });
  });
};
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

/***/ }),

/***/ "./src/components/totalAmount.js":
/*!***************************************!*\
  !*** ./src/components/totalAmount.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   totalAmount: () => (/* binding */ totalAmount)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./src/data.js");

let total = document.getElementById('summary');
function totalAmount() {
  let totalSum = 0;
  for (let i = 0; i < _data__WEBPACK_IMPORTED_MODULE_0__.data.items.length; i++) {
    let _item = _data__WEBPACK_IMPORTED_MODULE_0__.data.items[i];
    let _totalCP = _item.amount * _item.pairCount;
    totalSum += _totalCP - _totalCP / 100 * _item.discount;
  }
  console.log(totalSum);
  total.innerHTML = `
        <div class="shipping-left">Free 2 Day Shipping</div>
        <div class="shipping-Right">Total : <span class="bold-600"> DKK ${totalSum}</span> </div>
    `;
}

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   data: () => (/* binding */ data)
/* harmony export */ });
const data = {
  items: [{
    id: 'item1',
    amount: 195.00,
    discount: 50,
    isMostPopular: false,
    pairCount: 1
  }, {
    id: 'item2',
    amount: 345.00,
    discount: 40,
    isMostPopular: true,
    pairCount: 2
  }, {
    id: 'item3',
    amount: 528.00,
    discount: 60,
    isMostPopular: false,
    pairCount: 3
  }],
  currency: "DKK"
};

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_bootstrap_js.bundle.js.map