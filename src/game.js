import Ball from "/src/ball";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.gameObjects = [
      new Ball(this, "#f00"),
      new Ball(this, "#033"),
      new Ball(this, "#330"),
      new Ball(this, "#0f0"),
      new Ball(this, "#060"),
      new Ball(this, "#006"),
      new Ball(this, "#606"),
      new Ball(this, "#66f")
    ];

    this.start();
  }

  reset() {
    this.gameObjects.forEach(
      ball =>
        (ball.speed = {
          x: Math.floor(Math.random() * 10),
          y: -1 * Math.floor(Math.random() * 10) + 1
        })
    );
    this.gameObjects.forEach(ball => (ball.position = { x: 300, y: 300 }));
  }

  start() {
    this.reset();
  }

  update(deltaTime) {
    [...this.gameObjects].forEach(ball => ball.update(deltaTime));
  }
  draw(ctx) {
    this.gameObjects.forEach(ball => ball.draw(ctx));
  }
}
