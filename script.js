var c = document.getElementById("canvas");
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 110;
var ctx = c.getContext("2d");

var zustaende = [
  { name: "lol", x: 200, y: 200, connect: [1] },
  { name: "yeet", x: 200, y: 100, connect: [2, 3] },
  { name: "yolo", x: 750, y: 50, connect: [3] },
  { name: "lmao", x: 450, y: 200, connect: [0, 2] },
];

draw();

function draw() {
  connections();
  labels();
}

function connections() {
  zustaende.map((zustand) => {
    ctx.fillStyle = "#FF6700";
    zustand.connect.map((connect) => {
      ctx.beginPath();
      ctx.arrow(
        zustand.x,
        zustand.y,
        zustaende[connect].x,
        zustaende[connect].y,
        [1, 10, -1, 0, 0, 0]
      );
      ctx.fill();
    });
  });
}

function labels() {
  ctx.font = "25px Lexend Deca";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  zustaende.map((zustand) => {
    ctx.fillStyle = "#C0C0C0";
    ctx.fillRect(zustand.x - zustand.name.length*17/2, zustand.y - 23, zustand.name.length*17, 46);
    ctx.fillStyle = "#004E98";
    ctx.fillText(zustand.name, zustand.x, zustand.y);
  });
}
