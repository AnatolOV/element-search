//Рабочий код
let menuClases = document.querySelectorAll(".menu__link");
for (let i = 0; i < menuClases.length; i++) {
  let link = menuClases[i];
  link.onclick = function () {    
    if (link.closest(".menu__item").querySelector(".menu").classList.contains("menu_active")) {    
    link.closest(".menu__item").querySelector(".menu_sub").className = "menu menu_sub";
    return false;
    }
    if (link.closest(".menu__item").querySelector(".menu_sub")) {
      link.closest(".menu__item").querySelector(".menu_sub").className = "menu menu_sub menu_active";
      return false;
    } 
  };   
}
/*
//Рабочий, но кривой вариант 2...
let menuClases = document.querySelectorAll(".menu__link");
for (let i = 0; i < menuClases.length; i++) {
 let link = menuClases[i];
  let link1 = menuClases[1];
  let link2 = menuClases[5];
  let actives = document.querySelectorAll(".menu menu_sub menu_active");

  link1.onclick = function () {
   if (actives) {
      link2.closest(".menu__item").querySelector(".menu_sub").className = "menu menu_sub";
    }
    if (link1.closest(".menu__item").querySelector(".menu").classList.contains("menu_active")) {
      link1.closest(".menu__item").querySelector(".menu_sub").className = "menu menu_sub";
      return false;
    }
    if (link1.closest(".menu__item").querySelector(".menu_sub")) {
      link1.closest(".menu__item").querySelector(".menu_sub").className = "menu menu_sub menu_active";
      return false;
    }
  };

  link2.onclick = function () {
    if (actives) {
      link1.closest(".menu__item").querySelector(".menu_sub").className = "menu menu_sub";
    }
    if (link2.closest(".menu__item").querySelector(".menu").classList.contains("menu_active")) {
       link2.closest(".menu__item").querySelector(".menu_sub").className = "menu menu_sub";
      return false;
    }
    if (link2.closest(".menu__item").querySelector(".menu_sub")) {
      link2.closest(".menu__item").querySelector(".menu_sub").className = "menu menu_sub menu_active";
      return false;
    }
  };
}
*/