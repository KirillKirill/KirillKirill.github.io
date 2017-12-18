class Player {
    constructor(speed, health) {
        this.X = 10;
        this.Y = 0;
        this.PositionX = 60;
        this.PositionY = 200;
        this.width = 150;
        this.height = 100;
        this.speed = speed;
        this.moveUp = false;
        this.moveDown = false;
        this.moveLeft = false;
        this.moveRight = false;
        this.sizeCoefficient = 0.8;
        this.life = 2;
        this.health = health;
        this.healthDefault = health;
        this.score = 0;
    }

    moveToDirection() {
        if(this.moveUp && this.PositionY >= 10) {
            this.PositionY -= this.speed;
        }

        if(this.moveDown && this.PositionY <= 460) {
            this.PositionY += this.speed;
        }

        if(this.moveLeft && this.PositionX >= 10) {
            this.PositionX -= this.speed;
        }

        if(this.moveRight && this.PositionX <= 820) {
            this.PositionX += this.speed;
        }
    }

    draw(playerImage, Images) {
        playerImage.clearRect(0, 0, 960, 550);
        playerImage.drawImage(Images.spriteImage, this.X, this.Y, this.width,
                this.height, this.PositionX, this.PositionY, this.width * this.sizeCoefficient, this.height * this.sizeCoefficient);
    }

    move() {
        this.moveToDirection();
    }
}
