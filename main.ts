input.onButtonPressed(Button.A, function () {
    _17 = _17 + 10
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    _16 = pins.digitalReadPin(DigitalPin.P16)
    basic.showString("" + (_16))
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
    _12 = pins.digitalReadPin(DigitalPin.P12)
    basic.showString("" + (_12))
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
    _8 = pins.digitalReadPin(DigitalPin.P8)
    basic.showString("" + (_8))
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
    if (_16 == 0 && (_12 == 0 && _8 == 1)) {
        basic.showString("carte Ilian ")
        basic.showString("" + (_17))
    } else {
        if (_16 == 0 && (_12 == 1 && _8 == 0)) {
            basic.showString("carte Noah")
        } else {
            if (_16 == 1 && (_12 == 1 && _8 == 0)) {
                basic.showString("carte Ryan")
            } else {
                if (_16 == 0 && (_12 == 1 && _8 == 1)) {
                    basic.showString("carte Papa")
                }
            }
        }
    }
    basic.pause(200)
    basic.showString("aurevoir")
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    _17 = _17 - 10
})
let _8 = 0
let _12 = 0
let _16 = 0
let _17 = 0
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
_17 = 0
