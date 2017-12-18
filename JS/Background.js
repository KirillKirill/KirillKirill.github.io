class BackGround {
    constructor(rotationSpeed) {
        this.CanvasXSize = 2000;
        this.CanvasYSize = 550;
        this.speed = rotationSpeed;
        this.x = this.CanvasXSize;
    }

    draw(backgroundImage, Images) {
        backgroundImage.clearRect(0, 0, this.CanvasXSize, this.CanvasYSize);
        if (this.x <= 0) {
            this.x = this.CanvasXSize;
        }
        if (this.x > this.CanvasXSize - this.CanvasXSize) {
            backgroundImage.drawImage(Images.backgroundImage,
                this.x - this.CanvasXSize + 1, 0, this.CanvasXSize, this.CanvasYSize);
        }
        backgroundImage.drawImage(Images.backgroundImage,
            this.x, 0, this.CanvasXSize, this.CanvasYSize);
        this.x -= this.speed;
    }
}