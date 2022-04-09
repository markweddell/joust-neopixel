function doCareful () {
    basic.showIcon(IconNames.Sad)
    for (let index = 0; index < 4; index++) {
        strip.clear()
        strip.show()
        basic.pause(200)
        strip.showColor(neopixel.rgb(red * 255, green * 255, blue * 255))
        basic.pause(200)
    }
    if (ShakeSense < 2) {
        ShakeSense = 0
    }
    basic.showNumber(ShakeSense)
}
function doLose () {
    strip.clear()
    strip.show()
    basic.showIcon(IconNames.No)
    basic.pause(10000)
    ShakeSense = 0
    strip.showColor(neopixel.rgb(red * 255, green * 255, blue * 255))
    basic.showNumber(ShakeSense)
}
input.onButtonPressed(Button.A, function () {
    colorpicker += 1
    if (colorpicker > 7) {
        colorpicker = 1
    }
    basic.showNumber(colorpicker)
    blue = colorpicker % 2
    red = Math.floor(colorpicker / 4)
    green = Math.floor((colorpicker - red * 4) / 2)
    strip.showColor(neopixel.rgb(red * 255, green * 255, blue * 255))
})
let ShakeSense = 0
let green = 0
let red = 0
let blue = 0
let colorpicker = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
basic.showIcon(IconNames.Duck)
colorpicker = 1
blue = colorpicker % 2
red = Math.floor(colorpicker / 4)
green = Math.floor((colorpicker - red * 4) / 2)
strip.showColor(neopixel.rgb(red * 255, green * 255, blue * 255))
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1200) {
        ShakeSense = 2
    } else if (input.acceleration(Dimension.Strength) > 1100) {
        ShakeSense = 1
    } else {
    	
    }
})
basic.forever(function () {
    if (ShakeSense == 2) {
        doLose()
    } else if (ShakeSense == 1) {
        doCareful()
    } else {
        basic.showNumber(ShakeSense)
        basic.pause(100)
    }
})
