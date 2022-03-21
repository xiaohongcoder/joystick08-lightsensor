let strip = neopixel.create(DigitalPin.P8, 4, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showColor(neopixel.rgb(input.lightLevel(), 0, 0))
    strip.show()
})
