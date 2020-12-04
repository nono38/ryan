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
        basic.showString("" + (SOMME_ILIAN))
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
    if (_16 == 0 && (_12 == 0 && _8 == 1)) {
        SOMME_ILIAN = SOMME_ILIAN + 10
    } else {
        if (_16 == 0 && (_12 == 1 && _8 == 0)) {
            SOMME_NOAH = SOMME_NOAH + 10
        } else {
            if (true) {
            	
            }
        }
    }
})
let SOMME_NOAH = 0
let _8 = 0
let _12 = 0
let _16 = 0
let SOMME_ILIAN = 0
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
SOMME_ILIAN = 0
