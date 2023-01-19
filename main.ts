input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let player: game.LedSprite = null
player = game.createSprite(2, 4)
let poison = game.createSprite(randint(0, 4), 0)
let _777 = game.createSprite(randint(0, 4), 4)
led.unplot(_777.get(LedSpriteProperty.X), _777.get(LedSpriteProperty.Y))
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
            poison = game.createSprite(randint(0, 4), 0)
        } else {
            basic.pause(500)
            poison.change(LedSpriteProperty.Y, 1)
        }
    }
})
