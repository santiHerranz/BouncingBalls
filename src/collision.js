export function detectCollisionBetween(ball, other) {
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;

  let topOfObject = other.position.y;
  let leftSideOfObject = other.position.x;
  let rightSideOfObject = other.position.x + other.size;
  let bottomOfObject = other.position.y + other.size;

  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    ball.position.x >= leftSideOfObject &&
    ball.position.x + ball.size <= rightSideOfObject
  ) {
    return true;
  } else {
    return false;
  }
}
