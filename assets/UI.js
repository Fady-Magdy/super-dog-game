export class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 30;
    this.fontFamily = "Bangers";
    this.livesImage = document.getElementById("lives");
  }
  draw(context) {
    context.save();
    context.font = this.fontSize + "px " + this.fontFamily;
    context.textAlign = "left";
    context.fillStyle = this.game.fontColor;
    // Score
    context.fillText("Score: " + this.game.score, 20, 50);
    // Timer
    context.font = this.fontSize * 0.8 + "px " + this.fontFamily;
    context.fillText("Time: " + (this.game.time * 0.001).toFixed(1), 20, 80);
    // lives
    for (let i = 0; i < this.game.lives; i++) {
      context.drawImage(this.livesImage, 25 * i + 20, 95, 25, 25);
    }

    //  game over message
    if (this.game.gameOver) {
      context.textAlign = "center";
      if (this.game.score > this.game.winningScore) {
        context.font = this.fontSize * 2 + "px " + this.fontFamily;

        context.fillText(
          "Boo-yah",
          this.game.width * 0.5,
          this.game.height * 0.5
        );
        context.font = this.fontSize * 0.7 + "px " + this.fontFamily;
        context.fillText(
          "You Are A Champion, Well Done!!",
          this.game.width * 0.5,
          this.game.height * 0.5 + 30
        );
      } else {
        context.font = this.fontSize * 1.5 + "px " + this.fontFamily;
        context.fillStyle = "white";
        context.fillText(
          "Game Over!",
          this.game.width * 0.5,
          this.game.height * 0.5
        );
        context.fillStyle = "black";
        context.fillText(
          "Game Over!",
          this.game.width * 0.5 + 1,
          this.game.height * 0.5 + 1
        );
        context.font = this.fontSize * 0.7 + "px " + this.fontFamily;
        context.fillStyle = "white";
        context.fillText(
          "Better luck next time!",
          this.game.width * 0.5,
          this.game.height * 0.5 + 30
        );
        context.fillStyle = "black";
        context.fillText(
          "Better luck next time!",
          this.game.width * 0.5 + 1,
          this.game.height * 0.5 + 30 + 1
        );
      }
    }
    context.restore();
  }
}
