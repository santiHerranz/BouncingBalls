import { detectCollisionBetween } from "/src/collision";

export default class Ball {
  constructor(game, size, color) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.size = size;
    this.color = color;
    this.game = game;
  }

  draw(ctx) {
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI); // pilota rodona
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  detectCollision() {
    //console.log(this.game.gameObjects);
    let others = this.game.gameObjects.filter(
      f => f.position.x !== this.position.x && f.position.y !== this.position.y
    );

    if (detectCollisionBetween(this, others[0])) {
      this.speed.y = -this.speed.y;
      this.speed.x = -this.speed.x;
    }
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // wall on left or right
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    // wall on top
    if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    // bottom of game
    if (this.position.y + this.size > this.gameHeight) {
      this.speed.y = -this.speed.y;
    }
  }
}
