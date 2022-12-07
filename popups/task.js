let win = document.querySelector("#modal_main");
win.className = "modal modal_active";

let suc = document.querySelector("#modal_success");

let closeWs = document.querySelectorAll(".modal__close");
closeWs.forEach( i => i.onclick = function () {i.closest(".modal").className = "modal"});

let show = document.querySelector(".show-success");

show.onclick = function () {
  win.className = "modal";
  suc.className = "modal modal_active";
};
