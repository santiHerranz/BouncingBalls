import Ball from "/src/ball";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.gameObjects = [
      new Ball(this, 20, "#f00"),
      new Ball(this, 20, "#0ff"),
      new Ball(this, 20, "#ff0"),
      new Ball(this, 20, "#0f0"),
      new Ball(this, 20, "#060"),
      new Ball(this, 20, "#006"),
      new Ball(this, 20, "#606"),
      new Ball(this, 20, "#660")
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
    this.gameObjects.forEach(
      ball =>
        (ball.position = {
          x: Math.floor(Math.random() * 300),
          y: Math.floor(Math.random() * 300)
        })
    );
  }

  start() {
    this.reset();
  }

  update(deltaTime) {
    this.gameObjects.forEach(ball => ball.detectCollision());
    this.gameObjects.forEach(ball => ball.update(deltaTime));
  }

  draw(ctx) {
    this.gameObjects.forEach(ball => ball.draw(ctx));
  }
}
