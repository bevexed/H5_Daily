class Pipe {
  constructor() {
    this.imagedown = game.R.pipe1;
    this.imageup = game.R.pipe2;
    this.interSpace = 100; // 管子的间隙
    this.upHeightCut = (Math.random() * 0.5 + 0.25) * this.imageup.height;
    this.upHeight = this.imageup.height - this.upHeightCut;
    this.downHeight = this.interSpace + this.upHeight;
    this.distance = innerWidth;
    game.pipes.push(this);

  }

  render() {
    game.ctx.save();
    this.distance -= 1;
    game.ctx.drawImage(this.imageup, this.distance, -this.upHeightCut);
    game.ctx.drawImage(this.imagedown, this.distance, this.downHeight);
    game.ctx.restore();

    this.gameEnd()
  }

  gameEnd() {
    game.PL = this.distance;
    game.PR = this.distance + this.imagedown.width;
    game.PT = this.upHeight;
    game.PB = this.downHeight;

    if (game.BR >= game.PL && game.BR <= game.PR) {
      if (game.BT <= game.PT || game.BB >= game.PB) {

      }
    }
  };
}
