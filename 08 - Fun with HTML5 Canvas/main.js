/** @type {HTMLCanvasElement} */
const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let lineW = 10;
let grow = true;

const draw = (e) => {
  if (!isDrawing) return;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.lineWidth = lineW;
  hue >= 350 ? (hue = 0) : hue++;
  if (grow) {
    lineW++;
  } else if (!grow) {
    lineW--;
  }

  if (lineW >= 100 || lineW <= 10) {
    grow = !grow;
  }
};

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseleave", () => (isDrawing = false));
