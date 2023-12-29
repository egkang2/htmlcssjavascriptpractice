
/*const colors = ["#e74c3c", "#f39c12", "#f1c40f", "#2ecc71"];//빨주노초
const title = document.getElementById("title");
// 원하는 색상을 가져오는 함수
function Color(index) {
  // 인덱스가 유효한 범위 내에 있는지 확인
  if (index >= 0 && index < colors.length) {
    return colors[index];
  } else {
    console.error("Index out of range");
    return "#000000"; // 기본 색상
  }
}

function MouseUp() {
    title.style.color = Color(0);
    title.innerText = "The mouse is here!";
}

function MouseGone() {
    title.style.color = Color(1);
    title.innerText = "The mouse is gone!";
}

function ResizeEvent() {
    title.style.color = Color(2);
    title.innerText = "You just resized!";
}

function MouseRightClick() {
    title.style.color = Color(3);
    title.innerText = "That was a right click!";
}

function superEventHandler() {
    title.addEventListener("mouseenter", MouseUp);
    title.addEventListener("mouseleave", MouseGone);
    window.addEventListener("resize", ResizeEvent);
    window.addEventListener("contextmenu", MouseRightClick);
}

superEventHandler()


*/



const superEventHandler = {
  Color: function (index) {
    // 인덱스가 유효한 범위 내에 있는지 확인
    if (index >= 0 && index < colors.length) {
      return colors[index];
    } else {
      console.error("Index out of range");
      return "#000000"; // 기본 색상
    }
  },
  MouseUp: function () {
    title.style.color = superEventHandler.Color(0);
    title.innerText = "The mouse is here!";
  },
  MouseGone: function () {
    title.style.color = superEventHandler.Color(1);
    title.innerText = "The mouse is gone!";
  },
  ResizeEvent: function () {
    title.style.color = superEventHandler.Color(2);
    title.innerText = "You just resized!";
  },
  MouseRightClick: function () {
    title.style.color = superEventHandler.Color(3);
    title.innerText = "That was a right click!";
  },
  AddedEventListeners: function () {
    if (title) {
      title.addEventListener("mouseenter", superEventHandler.MouseUp);
      title.addEventListener("mouseleave", superEventHandler.MouseGone);
      window.addEventListener("resize", superEventHandler.ResizeEvent);
      window.addEventListener("contextmenu", superEventHandler.MouseRightClick);
    }
  },
};

// 이벤트 핸들러 등록
const title = document.querySelector("h1");
superEventHandler.AddedEventListeners();
