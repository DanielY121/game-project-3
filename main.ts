input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let sprite = 0
let player: game.LedSprite = null
player = game.createSprite(2, 4)
let poison = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (player == poison) {
            player.delete()
            poison.delete()
            basic.clearScreen()
            game.gameOver()
        } else if (poison.get(LedSpriteProperty.Y) == 4) {
            poison.delete()
            game.addScore(1)
            sprite = randint(0, 10)
            if (sprite > 0) {
                poison = game.createSprite(randint(0, 4), 0)
            } else {
                poison = game.createSprite(player.get(LedSpriteProperty.X), 0)
            }
        } else {
            basic.pause(500)
            poison.change(LedSpriteProperty.Y, 1)
        }
    }
})
