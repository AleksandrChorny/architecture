//Подключение файлов js из папки 'modules'
import * as flsFunctions from "./modules/functions.js";
//Імпорт функції додавання класу '_action'
import * as click from "./modules/onclickAdd_action.js";
import * as modal from "./modules/modal.js";

flsFunctions.isWebp();

// core version + navigation, pagination modules:
//!  import Swiper, { Navigation, Pagination } from 'swiper';
//! const swiper = new Swiper(...);

//Виклик функції додавання каласу в н6алащтуваннях передаємо ім'я класу по якому клік я до кого потрібно додати '_action'
//click.clickOnClassADDClassName('.burger-menu', '.header__menu', 'scroll');
click.clickOnClassADDClassName('.burger-menu', '.header__menu');


modal.activateBlock({
   buttonToActionBlockClass: 'header__btn',
   actionBlockClass: 'modal',
   buttonToCloseBlockClass: 'modal__close',
   actionClassName: '_action',
   scroll: false
});

modal.activateBlock({
   buttonToActionBlockClass: 'get-in-touch__btn',
   actionBlockClass: 'modal',
   buttonToCloseBlockClass: 'modal__close',
   actionClassName: '_action',
   scroll: false
});