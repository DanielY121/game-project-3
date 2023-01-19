def on_button_pressed_a():
    player.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    player.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

player: game.LedSprite = None
player = game.create_sprite(2, 4)
poison = game.create_sprite(randint(0, 4), 0)

def on_forever():
    global poison
    for index in range(4):
        if player == poison:
            player.delete()
            poison.delete()
            basic.clear_screen()
            game.game_over()
        elif poison.get(LedSpriteProperty.Y) == 4:
            poison.delete()
            game.add_score(1)
            poison = game.create_sprite(randint(0, 4), 0)
        else:
            basic.pause(500)
            poison.change(LedSpriteProperty.Y, 1)
basic.forever(on_forever)
