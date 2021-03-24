basic.forever(function () {
    basic.showNumber(input.lightLevel())
    basic.showIcon(IconNames.Heart)
    if (input.lightLevel() < 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
