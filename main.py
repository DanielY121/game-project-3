def on_gesture_tilt_left():
    player.change(LedSpriteProperty.X, -1)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_gesture_tilt_right():
    player.change(LedSpriteProperty.X, 1)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

poison2: game.LedSprite = None
_this = 0
player: game.LedSprite = None
player = game.create_sprite(2, 4)
poison = game.create_sprite(randint(0, 4), 0)

def on_forever():
    global _this, poison, poison2
    _this = randint(1, 2)
    if _this == 1:
        for index in range(4):
            if player == poison:
                player.delete()
                poison.delete()
                game.game_over()
            elif poison.get(LedSpriteProperty.Y) == 4:
                poison.delete()
                game.add_score(1)
                poison = game.create_sprite(randint(0, 4), 0)
            else:
                basic.pause(500)
                poison.change(LedSpriteProperty.Y, 1)
    else:
        for index2 in range(4):
            if player == poison:
                player.delete()
                poison.delete()
                poison2.delete()
                game.game_over()
            elif poison.get(LedSpriteProperty.Y) == 4:
                poison.delete()
                game.add_score(1)
                poison = game.create_sprite(randint(0, 4), 0)
            else:
                basic.pause(500)
                poison.change(LedSpriteProperty.Y, 1)
        poison2 = game.create_sprite(randint(0, 4), 0)
        for index3 in range(4):
            if player == poison2:
                player.delete()
                game.game_over()
            elif poison2.get(LedSpriteProperty.Y) == 4:
                poison2.delete()
                game.add_score(1)
                poison2 = game.create_sprite(randint(0, 4), 0)
            else:
                basic.pause(500)
                poison2.change(LedSpriteProperty.Y, 1)
basic.forever(on_forever)
