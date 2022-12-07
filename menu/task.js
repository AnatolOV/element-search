/*
  Класс menu_active
   необходимо добавлять не у главного списка навигации, а у подменю, которое находится рядом с ссылкой…
Вам нужно от кликнутой ссылки с помощью closest найти элемент списка, к которому принадлежит как ссылка, так и возможное подменю…+
Затем, нужно попытаться найти возможное подменю…После поиска элемента, необходимо проверить: было ли найдено подменю? Если вам получится
 найти подменю, то у него необходимо инвертировать наличие класса menu_active и отменять стандартное действие клика по ссылке
  (с помощью return false).
Повторный клик по ссылке, должен закрывать подменю, а клик по ссылке, у которой нет подменю, должен перенаправлять по ссылке.
*/

let menuClases = document.querySelectorAll(".menu__link");

for (let i = 0; i < menuClases.length; i++) {
  let a = menuClases[i];

  a.onclick = function () {
    a.closest(".menu__item");
    if (a.closest(".menu__item").querySelector(".menu_sub")) {
      a.closest(".menu__item").querySelector(".menu_sub").className =
        "menu menu_sub menu_active";
      return false;
    }
     //else if (a.closest(".menu__item").querySelector(".menu menu_sub menu_active")) {
    //console.log(4);
    //a.closest(".menu__item").querySelector(".menu_sub").className = "menu menu_sub";
    //return false;
    // }
    //??? Не понимаю почему не срабатывает при повторном клике, подскажите, пожалуйста.
    else {
      return false;
    }
  };
}
