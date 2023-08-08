import 'normalize.css';
import './styles/index.css';
import { Banner } from './components/banner';
import { Carts, registerEventListener } from './components/carts';
import {actionBtn} from './components/actionbtn'
import {totalAmount} from './components/totalAmount' 


function init() {
    Banner();
    Carts();
    actionBtn();
    registerEventListener();
    totalAmount();
}
window.addEventListener('load', (event) => {
    init();
});