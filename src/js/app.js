//Подключение файлов js из папки 'modules'
import * as flsFunctions from "./modules/functions.js";
//Імпорт функції додавання класу '_action'
import * as click from "./modules/onclickAdd_action.js";

flsFunctions.isWebp();

// core version + navigation, pagination modules:
//!  import Swiper, { Navigation, Pagination } from 'swiper';
//! const swiper = new Swiper(...);

//Виклик функції додавання каласу в н6алащтуваннях передаємо ім'я класу по якому клік я до кого потрібно додати '_action'
click.clickOnClassADDClassName('.burger-menu', '.main-menu');
click.clickOnClassADDClassName('.burger-menu', '.footer');
//console.log(click.clickOnClass());

//console.log('action');