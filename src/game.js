import Ball from "/src/ball";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.gameObjects = [];

    this.ball = new Ball(this);
  }

  reset() {
    this.position = { x: 10, y: 400 };
    this.speed = { x: 40, y: -20 };
  }

  start() {
    this.ball.reset();
    this.gameObjects = [this.ball];
  }

  update(deltaTime) {
    this.ball.update(deltaTime);
  }
  draw(ctx) {
    this.ball.draw(ctx);
  }
}
