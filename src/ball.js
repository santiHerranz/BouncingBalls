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

  update(deltaTime) {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    /*     // wall on left or right
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.velocity.x = -this.velocity.x;
    }

    // wall on top
    if (this.position.y < 0) {
      this.velocity.y = -this.velocity.y;
    }

    // bottom of game
    if (this.position.y + this.size > this.gameHeight) {
      this.velocity.y = -this.velocity.y;
    } */
  }
}
