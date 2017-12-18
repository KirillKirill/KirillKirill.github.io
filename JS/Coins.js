class Coin {
    constructor(speed) {
        this.X = 10;
        this.Y = 218;
        this.PositionX = Math.floor(Math.random() * 100) + 960;
        this.PositionY = Math.floor(Math.random() * 500);
        this.width = 60;
        this.height = 60;
        this.speed = speed;
        this.spriteFlag = 0;
    }

    draw(coinImage, Images) {
        if (this.spriteFlag < 10) {
            coinImage.drawImage(Images.spriteImage, this.X, this.Y, this.width,
                this.height, this.PositionX, this.PositionY, this.width, this.height);
        }
        else if (this.spriteFlag >= 10 && this.spriteFlag < 20){
            coinImage.drawImage(Images.spriteImage, this.X + 130, this.Y, this.width,
                this.height, this.PositionX, this.PositionY, this.width, this.height);
        }
        else if (this.spriteFlag >= 20 && this.spriteFlag < 30) {
            coinImage.drawImage(Images.spriteImage,this.X + 65, this.Y, this.width,
                this.height,this.PositionX, this.PositionY, this.width, this.height);
        }
        this.spriteFlag < 30 ? this.spriteFlag += 1 : this.spriteFlag = 0;
    }

    move() {
        this.PositionX -= this.speed;
        if (this.PositionX < -50) {
            this.PositionX = Math.floor(Math.random() * 500) + 960;
            this.PositionY = Math.floor(Math.random() * 450);
        }
    }

    deleteFromZone() {
        this.PositionX = Math.random() * 110 + 1100;
        this.PositionY = Math.random() * 500;
    }
}

class ArrayCoins {
    constructor(count, speed){
        this.count = count;
        this.arrayOfCoins = [];
        this.speed = speed;
    }

    create() {
        for (let i = 0; i < this.count; ++i) {
            this.arrayOfCoins[i] = new Coin(i + this.speed);
        }
    }

    move() {
        for (let i = 0; i < this.count; ++i) {
            this.arrayOfCoins[i].move();
        }
    }

    delete() {
        this.arrayOfCoins.splice(0, 1);
    }

    draw(coinImage, Images) {
        coinImage.clearRect(0, 0, 960, 550);
        for (let i = 0; i < this.count; ++i) {
            this.arrayOfCoins[i].draw(coinImage, Images);
        }
    }
}
