input.onButtonPressed(Button.A, function () {
    num += 1
})
input.onButtonPressed(Button.B, function () {
    num += -1
})
basic.clearScreen()
let num = 0
basic.forever(function () {
    if (num >= 0) {
        basic.showNumber(num)
    } else {
        basic.showNumber(0)
    }
})
