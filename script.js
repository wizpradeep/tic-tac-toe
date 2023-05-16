console.log("Hello, World!");

const thClick = document.getElementById("thClick");
const looser = document.getElementById("looser");
const again = document.getElementById("again");

//
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const e = document.getElementById("e");
const f = document.getElementById("f");
const g = document.getElementById("g");
const h = document.getElementById("h");
const i = document.getElementById("i");
//

const th = Array.from(document.querySelectorAll("th"));

let turn = "x";

//
again.addEventListener("click", function () {
  th.forEach((element) => {
    element.innerHTML = "";
    element.style.pointerEvents = "auto";
    looser.pause();
    looser.currentTime = 0;
    element.style.backgroundColor = "white";
  });
});

//
function checkGame(aa, bb, cc) {
  if (
    (aa.innerHTML == "x" && bb.innerHTML == "x" && cc.innerHTML == "x") ||
    (aa.innerHTML == "0" && bb.innerHTML == "0" && cc.innerHTML == "0")
  ) {
    aa.style.backgroundColor = "red";
    bb.style.backgroundColor = "red";
    cc.style.backgroundColor = "red";
    console.log("gameOver");
    looser.play();
    // alert("this is for looser");
    function stop(element) {
      element.style.pointerEvents = "none";
    }
    th.forEach((element) => {
      stop(element);
    });
  }
}

th.forEach((element) => {
  element.addEventListener("click", function () {
    if (element.innerHTML == "") {
      thClick.play();
      if (turn == "x") {
        turn = "0";
        element.innerHTML = turn;
      } else {
        turn = "x";
        element.innerHTML = turn;
      }
    } else {
      element.style.pointerEvents = "none";
    }

    // const a = document.getElementById("a").innerHTML;
    // const b = document.getElementById("b").innerHTML;
    // const c = document.getElementById("c").innerHTML;
    // const d = document.getElementById("d").innerHTML;
    // const e = document.getElementById("e").innerHTML;
    // const f = document.getElementById("f").innerHTML;
    // const g = document.getElementById("g").innerHTML;
    // const h = document.getElementById("h").innerHTML;
    // const i = document.getElementById("i").innerHTML;

    //
    checkGame(a, b, c);
    checkGame(d, e, f);
    checkGame(g, h, i);
    checkGame(a, d, g);
    checkGame(b, e, h);
    checkGame(c, f, i);
    checkGame(a, e, i);
    checkGame(c, e, g);
  });
});
