const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function changeGradient() {
  const color1 = getRandomColor();
  let color2 = getRandomColor();

  // Make sure color1 and color2 are different
  while (color1 === color2) {
    color2 = getRandomColor();
  }

  const gradient = `linear-gradient(45deg, ${color1}, ${color2})`;
  document.body.style.background = gradient;
}
function click() {
  const playButton = document.querySelector("button");
  playButton.addEventListener("click", click);
  getRandomColor();

  changeGradient();
}

click();
