/*
1. Используя цикл зарегистрируйте обработчики события *click* на элементах с классом *menu__link* - ? я правильно нашел?
2. Найдите меню рядом со ссылкой. Если оно есть, переключите у него класс *menu_active* - ???радом с какой ссылкой нужно присвоить 
дополнительно menu_active, какому классу?


3. Запрещайте переход по ссылке для тех, что имеют вложенное меню. Остальные
пункты меню должны без помех переводить пользователя на соответствующие страницы.
*/

let menuClases = document.querySelectorAll(".menu__link");
let a;

for (let i = 0; i < menuClases.length; i++) {
  a = menuClases[i];
  
  a.onclick = function () {
    if (a.closest(".menu")) {
      a.closest(".menu").className = "menu menu_active";
      return false;
    }
  };
}
