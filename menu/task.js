/*
  По поводу второго задания, то у вас при повторном клике первое условие if (a.closest(".menu__item").querySelector(".menu_sub")) { является
     истиным, вот и выполнятся действия для него. Кроме того, везде вовзвращается false, который отменяет переход по ссылке. Попробуйте следующий
      подход:

Найдите все подменю, которые должны открываться и закрываться. - +
Перебирайте найденые подменю и у каждого подменю находите рядом ссылки ((1)с помощью closest найдите внешний элемент списка и (2)
 внутри элемента списка найдите ссылку). - +
Для полученных ссылок, при переборе добавляйте обработчик события…То есть обработчик события будет добавлен только для ссылок у которых есть
 подменю. +

Внутри обработчика события клика по элементу у вас должна быть ссылка (по которой произошёл клик и на которую добавлялся обработчик события) 
и подменю (которое находится рядом).

Попробуйте найти уже открытое подменю в навигаторе (с помощью селектора).
Если открытое подменю существует, то его необходимо закрыть.
Далее, необходимо проверить: а какое подменю вы закрыли? Является ли это подменю тем же самым, что и то, которое находится рядом со ссылкой 
(у которой было событие (из шагов 1 и 4)).
Если это разные элементы, то необходимо открыть подменю, возле которого был клик (из шагов 1 и 4)
И последним вариантом остаётся то, что открытое ранее подменю (из 5 шага) совпадает с подменю возле ссылки (из шагов 1 и 4)…В таком случае, 
следовало просто закрывать ранее открытое подменю, что и должно было выполниться на 6-ом шаге…Вам останется только вернуть false, чтобы не
 срабатывало обновление страницы.
*/

let menuClases = document.querySelectorAll(".menu__link");

//2й вариант
let munuSubAll = document.querySelectorAll(".menu_sub"); //нашел все подменю, которые должны открываться/закрываться

munuSubAll.forEach((i) => {
  if (i.closest(".menu__item")) {
    let g = i.closest(".menu__item").querySelector(".menu__link");

    g.onclick = function () {
      if (g.closest(".menu__item").querySelector(".menu_sub").classList.contains("menu_active")) {
        g.closest(".menu__item").querySelector(".menu_active").className = "menu menu_sub";
        console.log(99,g.closest(".menu__item").querySelector(".menu_active").className = "menu menu_sub");//если комментирую эту строку меню не закрывается
      }

      if (g.closest(".menu__item").querySelector(".menu_sub")){
      g.closest(".menu__item").querySelector(".menu_sub").className = "menu menu_sub menu_active";
      
    }
    
      return false;
    };
  }
});

/*
for (let i = 0; i < menuClases.length; i++) {
  let a = menuClases[i];

  a.onclick = function () {
    a.closest(".menu__item");
    if (a.closest(".menu__item").querySelector(".menu_sub")) {
      a.closest(".menu__item").querySelector(".menu_sub").className =
        "menu menu_sub menu_active";
      return false;
    }
     else if (a.closest(".menu__item").querySelector(".menu").classList.contains("menu_active")) {
    console.log(4);
    a.closest(".menu__item").querySelector(".menu_sub").className = "menu menu_sub";
    return false;
     }
    //??? Не понимаю почему не срабатывает при повторном клике, подскажите, пожалуйста.
    else {
      return false;
    }
  };
}
*/
