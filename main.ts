input.onButtonPressed(Button.A, function () {
    if (knuffelen < 10) {
        variabele += 1
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.B, function () {
    if (voeden < 10) {
        variabele += 1
        basic.showIcon(IconNames.Happy)
    }
})
let voeden = 0
let knuffelen = 0
let variabele = 20
basic.forever(function () {
    if (knuffelen > 10 && voeden > 10) {
        variabele += -1
        basic.showIcon(IconNames.Sad)
    }
})
