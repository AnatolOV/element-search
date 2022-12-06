

let win = document.querySelector("#modal_main");
win.className = "modal modal_active";
let suc = document.querySelector("#modal_success");

let closeW = document.querySelector(".modal__close");
closeW.onclick = function () {

  win.className = "modal";
}

let show = document.querySelector(".show-success");
show.onclick = function (){
    suc.className = "modal modal_active";
}
