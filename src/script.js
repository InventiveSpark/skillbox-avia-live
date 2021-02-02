/*jslint browser:true*/
/*jslint node:true*/
/*jslint for:true*/
/*jshint esversion:6*/

const inputTicket = document.getElementById("inputTicket");
const ticketLength = inputTicket.getAttribute("maxlength");
const ticketBtn = document.getElementById("submitTicket");
const inputCode = document.getElementById("inputCode");
const codeLength = inputCode.getAttribute("maxlength");
const codeBtn = document.getElementById("submitCode");

function checkParams() {
  if (inputTicket.value.length >= ticketLength) {
    ticketBtn.removeAttribute("disabled");
  } else {
    ticketBtn.setAttribute("disabled", "disabled");
  }
  if (inputCode.value.length >= codeLength) {
    codeBtn.removeAttribute("disabled");
  } else {
    codeBtn.setAttribute("disabled", "disabled");
  }
}

function resetApp() {
  inputTicket.value = "";
  inputCode.value = "";
}


const pages = document.querySelectorAll(".js-container");

var activePageN = defineActivePage();

function defineActivePage() {
  var activePageExists = false;
  var activePage = 0;
  var i;
  for (i = 0; i < (pages.length - 1); i+=1) {
    if (pages[i].classList.contains("is-active")) {
      activePageExists = true;
      activePage = i;
      break;
    }
  }
  if (!activePageExists) {
    pages[activePage].classList.add("is-active");
  }
  return activePage;
}

function changeContainer() {
  pages[activePageN].classList.remove("is-active");
  activePageN = (activePageN < (pages.length - 1) ? (activePageN + 1) : 0);
  pages[activePageN].classList.add("is-active");
  setTimeout(resetApp, 463);
}

const form1 = document.getElementById("form1");
form1.onsubmit = function(event) {
  event.preventDefault();
  changeContainer();
};

const form2 = document.getElementById("form2");
form2.onsubmit = function(event) {
  event.preventDefault();
  changeContainer();
};

const resetBtn = document.getElementById("resetApp");
resetBtn.onclick = changeContainer;