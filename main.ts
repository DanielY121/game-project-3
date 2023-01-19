input.onGesture(Gesture.TiltLeft, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    player.change(LedSpriteProperty.X, 1)
})
let poison2: game.LedSprite = null
let _this = 0
let player: game.LedSprite = null
player = game.createSprite(2, 4)
let poison = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    _this = randint(1, 2)
    if (_this == 1) {
        for (let index = 0; index < 4; index++) {
            if (player == poison) {
                player.delete()
                poison.delete()
                game.gameOver()
            } else if (poison.get(LedSpriteProperty.Y) == 4) {
                poison.delete()
                game.addScore(1)
                poison = game.createSprite(randint(0, 4), 0)
            } else {
                basic.pause(500)
                poison.change(LedSpriteProperty.Y, 1)
            }
        }
    } else {
        for (let index = 0; index < 4; index++) {
            if (player == poison) {
                player.delete()
                poison.delete()
                poison2.delete()
                game.gameOver()
            } else if (poison.get(LedSpriteProperty.Y) == 4) {
                poison.delete()
                game.addScore(1)
                poison = game.createSprite(randint(0, 4), 0)
            } else {
                basic.pause(500)
                poison.change(LedSpriteProperty.Y, 1)
            }
        }
        poison2 = game.createSprite(randint(0, 4), 0)
        for (let index = 0; index < 4; index++) {
            if (player == poison2) {
                player.delete()
                game.gameOver()
            } else if (poison2.get(LedSpriteProperty.Y) == 4) {
                poison2.delete()
                game.addScore(1)
                poison2 = game.createSprite(randint(0, 4), 0)
            } else {
                basic.pause(500)
                poison2.change(LedSpriteProperty.Y, 1)
            }
        }
    }
})
