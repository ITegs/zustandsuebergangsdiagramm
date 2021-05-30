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
  ctx.font = "20px Lexend Deca";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  zustaende.map((zustand) => {
    ctx.fillStyle = "#C0C0C0";
    ctx.fillRect(
      zustand.x - (zustand.name.length * 17) / 2,
      zustand.y - 23,
      zustand.name.length * 17,
      46
    );
    ctx.fillStyle = "#004E98";
    ctx.fillText(zustand.name, zustand.x, zustand.y);
  });
}

function addZustand() {
  var name = document.getElementById("name").value;
  var x =
    Math.floor(
      Math.random() * (window.innerWidth - 100 - (window.innerWidth - 50) + 1)
    ) +
    (window.innerWidth - 50);
  var y =
    Math.floor(
      Math.random() * (window.innerHeight - 180 - (window.innerHeight - 90) + 1)
    ) +
    (window.innerHeight - 90);
  var connect = [];
  for (var i = 1; i <= numSelect; i++) {
    connect.push(parseInt(document.getElementById("select" + i).value));
  }

  zustaende.push({ name, x, y, connect });
  draw();
}

function zusaendeSelect(num) {
  var defaultValue = document.createElement("option");
  defaultValue.text = "Verbunden mit:";
  defaultValue.selected;
  document.querySelector("#select" + num).add(defaultValue, null);

  zustaende.map((zustand) => {
    var option = document.createElement("option");
    option.text = zustand.name;
    for (var i = 0; i < zustaende.length; i++) {
      if (zustaende[i].name == zustand.name) {
        option.value = i;
      }
    }

    document.querySelector("#select" + num).add(option, null);
  });
}

var numSelect = 1;
function addSelect() {
  var select = document.createElement("select");
  select.id = "select" + (numSelect + 1);
  document.querySelector("#selectConnections").appendChild(select, null);
  zusaendeSelect(numSelect + 1);
  numSelect++;
}
