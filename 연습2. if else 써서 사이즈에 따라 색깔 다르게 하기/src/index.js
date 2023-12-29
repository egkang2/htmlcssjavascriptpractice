const title = document.querySelector("h1");

function updateBackgroundColor() {
  var windowWidth = window.innerWidth;
  var screenWidth = screen.width;

  if (0 < windowWidth / screenWidth && windowWidth / screenWidth < 1 / 3) {
    document.body.style.backgroundColor = "blue";
  } else if (
    1 / 3 <= windowWidth / screenWidth &&
    windowWidth / screenWidth < 2 / 3
  ) {
    document.body.style.backgroundColor = "purple";
  } else {
    document.body.style.backgroundColor = "yellow";
  }
}

// 초기 로딩 시 배경색 업데이트
updateBackgroundColor();

// 창 크기 변경 시 이벤트 핸들러 등록
window.addEventListener("resize", updateBackgroundColor);
