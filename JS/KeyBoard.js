class KeyBoard {
    checkKeyPress(e, player) {
        let code = e.keyCode;
        switch (code) {
            case 87:
                player.moveUp = true;
                break;
            case 83:
                player.moveDown = true;
                break;
            case 68:
                player.moveRight = true;
                break;
            case 65:
                player.moveLeft = true;
                break;
        }
    }

    checkKeyUnpress(e, player) {
        let code = e.keyCode;
        switch (code) {
            case 87:
                player.moveUp = false;
                break;
            case 83:
                player.moveDown = false;
                break;
            case 68:
                player.moveRight = false;
                break;
            case 65:
                player.moveLeft = false;
                break;
        }
    }
}