//todo третье значення не обов'язкове = клас для зміни
//todo четверте значення булівне не обов'язкове за замовчення Фалсе  = scrole/none-scrole

export function clickOnClassADDClassName(
   classToClick = '.burger-menu',
   classToAction = '.header__menu',
) {

   document.addEventListener('click', actionMenu);

   function actionMenu(event) {
      if (event.target.closest(classToClick) && document.querySelector(classToAction)) {
         if (document.querySelector(classToClick).classList.contains('_action') && document.querySelector(classToAction).classList.contains('_action')) {
            document.querySelector(classToClick).classList.remove('_action');
            document.querySelector(classToAction).classList.remove('_action');
            document.querySelector("body").style.overflow = "";
            return;
         }
         if (document.querySelector(classToClick).classList.contains('_action') && !document.querySelector(classToAction).classList.contains('_action')) {
            document.querySelector(classToAction).classList.add('_action');
            if (document.querySelector("body").style.overflow !== "hidden") {
               document.querySelector("body").style.overflow = "hidden";
            }
         }
         if (!document.querySelector(classToClick).classList.contains('_action') && document.querySelector(classToAction).classList.contains('_action')) {
            document.querySelector(classToAction).classList.remove('_action');
            document.querySelector("body").style.overflow = "";
            return;
         }
         if (!document.querySelector(classToClick).classList.contains('_action') && !document.querySelector(classToAction).classList.contains('_action')) {
            document.querySelector(classToClick).classList.add('_action');
            document.querySelector(classToAction).classList.add('_action');
            if (document.querySelector("body").style.overflow !== "hidden") {
               document.querySelector("body").style.overflow = "hidden";
            }
         }
      }
   }
}