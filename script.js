var c = document.getElementById("canvas");
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 90;
var ctx = c.getContext("2d");

var zustaende = [
  { name: "lol", x: 200, y: 200, connect: [1] },
  { name: "yeet", x: 200, y: 100, connect: [2] },
  { name: "yolo", x: 750, y: 20, connect: [3] },
  { name: "lmao", x: 450, y: 200, connect: [0] },
];

draw();

function draw() {
  connections();
  labels();
}

function connections() {
  zustaende.map((zustand) => {
    ctx.moveTo(zustand.x, zustand.y);
    zustand.connect.map((connect) => {
      ctx.lineTo(zustaende[connect].x, zustaende[connect].y);
    });
    ctx.stroke();
  });
}

function labels() {
  ctx.font = "25px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  zustaende.map((zustand) => {
    ctx.fillStyle = "#fff";
    ctx.fillRect(zustand.x - 30, zustand.y - 30, 60, 60);
    ctx.fillStyle = "#000";
    ctx.fillText(zustand.name, zustand.x, zustand.y);
  });
}
