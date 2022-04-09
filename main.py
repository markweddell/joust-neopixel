def doCareful():
    for index in range(4):
        strip.set_brightness(255)
        strip.show()
        basic.pause(200)
        strip.set_brightness(128)
        strip.show()
        basic.pause(200)
def doLose():
    strip.set_brightness(0)
    strip.show()
    basic.pause(10000)

def on_button_pressed_a():
    strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    strip.show_color(neopixel.colors(NeoPixelColors.YELLOW))
input.on_button_pressed(Button.B, on_button_pressed_b)

strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
basic.pause(500)
basic.show_icon(IconNames.HEART)
basic.clear_screen()
strip.show_color(neopixel.colors(NeoPixelColors.RED))

def on_forever():
    if input.acceleration(Dimension.STRENGTH) > 1100:
        doLose()
    else:
        strip.set_brightness(255)
        strip.show()
basic.forever(on_forever)

def on_forever2():
    if input.acceleration(Dimension.STRENGTH) > 1050 and input.acceleration(Dimension.STRENGTH) < 1100:
        doCareful()
    else:
        strip.set_brightness(255)
        strip.show()
basic.forever(on_forever2)
