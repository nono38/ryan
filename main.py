_8 = 0
_12 = 0
total = 0

def on_button_pressed_a():
    global _8, _12, total
    _16 = 0
    _8 = pins.digital_read_pin(DigitalPin.P8)
    _12 = pins.digital_read_pin(DigitalPin.P12)
    _12 = pins.digital_read_pin(DigitalPin.P16)
    total = _8 / (_12 + _16)
    basic.show_number(total)
input.on_button_pressed(Button.A, on_button_pressed_a)
