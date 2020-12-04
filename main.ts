input.onButtonPressed(Button.A, function () {
    if (_16 == 0 && (_12 == 0 && _8 == 1)) {
        SOMME_ILIAN = SOMME_ILIAN - 10
    } else {
        if (_16 == 0 && (_12 == 1 && _8 == 0)) {
            SOMME_NOAH = SOMME_NOAH - 10
        } else {
            if (_16 == 1 && (_12 == 1 && _8 == 0)) {
                SOMME_RYAN = SOMME_RYAN - 10
            } else {
                if (_16 == 0 && (_12 == 1 && _8 == 1)) {
                    SOMME_PAPA = SOMME_PAPA - 10
                }
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    _16 = pins.digitalReadPin(DigitalPin.P16)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
    _12 = pins.digitalReadPin(DigitalPin.P12)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
    _8 = pins.digitalReadPin(DigitalPin.P8)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
    if (_16 == 0 && (_12 == 0 && _8 == 1)) {
        basic.showString("carte Ilian ")
        basic.pause(100)
        basic.showString("" + (SOMME_ILIAN))
    } else {
        if (_16 == 0 && (_12 == 1 && _8 == 0)) {
            basic.showString("carte Noah")
            basic.pause(100)
            basic.showString("" + (SOMME_NOAH))
        } else {
            if (_16 == 1 && (_12 == 1 && _8 == 0)) {
                basic.showString("carte Ryan")
                basic.pause(100)
                basic.showString("" + (SOMME_RYAN))
            } else {
                if (_16 == 0 && (_12 == 1 && _8 == 1)) {
                    basic.showString("carte Papa")
                    basic.pause(100)
                    basic.showString("" + (SOMME_PAPA))
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
            if (_16 == 1 && (_12 == 1 && _8 == 0)) {
                SOMME_RYAN = SOMME_RYAN + 10
            } else {
                if (_16 == 0 && (_12 == 1 && _8 == 1)) {
                    SOMME_PAPA = SOMME_PAPA + 10
                }
            }
        }
    }
})
let SOMME_PAPA = 0
let SOMME_RYAN = 0
let SOMME_NOAH = 0
let _8 = 0
let _12 = 0
let _16 = 0
let SOMME_ILIAN = 0
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
SOMME_ILIAN = 0
basic.forever(function () {
    _16 = pins.digitalReadPin(DigitalPin.P16)
    _12 = pins.digitalReadPin(DigitalPin.P12)
    _8 = pins.digitalReadPin(DigitalPin.P8)
})
