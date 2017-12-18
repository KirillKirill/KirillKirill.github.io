class Enemy {
    constructor(speed) {
        this.X = 5;
        this.Y = 100;
        this.PositionX = Math.floor(Math.random() * 500) + 960;
        this.PositionY = Math.floor(Math.random() * 390);
        this.width = 163;
        this.height = 113;
        this.speed = speed;
        this.sizeCoefficient = 0.9;
    }

    draw(enemyImage, Images) {
        enemyImage.clearRect(0, 0, 960, 550);
        enemyImage.drawImage(Images.spriteImage, this.X, this.Y, this.width,
            this.height, this.PositionX, this.PositionY,
            this.width * this.sizeCoefficient, this.height *this.sizeCoefficient);
    }
    move() {
        this.PositionX -= this.speed;
        if (this.PositionX < -500) {
            this.PositionX = Math.floor(Math.random() * 500) + 960;
            this.PositionY = Math.floor(Math.random() * 350);
        }
    }
}
