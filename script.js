const canvas = document.getElementById("world");
const c = canvas.getContext("2d");

canvas.width = 1266;
canvas.height = 668;

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const img = new Image();
img.src = "./img/kba-world.png";

const playerImage = new Image();
playerImage.src = './img/playerDown.png';

class Sprite {
  constructor({
    position,
    velocity,
    image
  }) {
    this.position = position
    this.image = image
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

const background = new Sprite({
  position: {
    x: -810,
    y: -1200
  },
  image: img
})

const keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  }
}

function animate() {
  window.requestAnimationFrame(animate)
  c.beginPath();
  c.strokeStyle = "red";
  c.rect(-582, -1098, 150, 150);
  c.stroke();
  background.draw()
  c.drawImage(
    playerImage,
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    canvas.width / 2 - (playerImage.width / 4) / 2,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height,
  );




// x:  -555 y:  -1098
if (background.position.x >= -582 && background.position.x <= -582 + 150) {            // Check if cursor is within horizontal bounds
  if (background.position.y <= -1035 && background.position.y <= -1050) {          // Check if cursor is within vertical bounds
    console.log("Cursor is within the rectangle");
    document.getElementById("overlay").style.display = "block";
  } else {
    document.getElementById("overlay").style.display = "none";
    console.log("Cursor is outside the rectangle (vertically)");
  }
} else {
  document.getElementById("overlay").style.display = "none";
  console.log("Cursor is outside the rectangle (horizontally)");
}

  console.log ("x: ", background.position.x, "y: ", background.position.y)

  if (keys.w.pressed) background.position.y += 3 
  else if (keys.a.pressed) background.position.x += 3 
  else if (keys.s.pressed) background.position.y -= 3 
  else if (keys.d.pressed) background.position.x -= 3 

}

animate()

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = true;
      break
    case 'a':
      keys.a.pressed = true;
      break
    case 's':
      keys.s.pressed = true;
      break
    case 'd':
      keys.d.pressed = true;
      break
  }
})

window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = false;
      break
    case 'a':
      keys.a.pressed = false;
      break
    case 's':
      keys.s.pressed = false;
      break
    case 'd':
      keys.d.pressed = false;
      break
  }
})