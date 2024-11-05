input.onButtonPressed(Button.A, function () {
    knuffelen += 5
})
input.onButtonPressed(Button.B, function () {
    voeden += 5
})
let knuffelen = 20
let voeden = 20
let dood = 0
loops.everyInterval(1000, function () {
    knuffelen += -1
    voeden += -1
})
basic.forever(function () {
    if (voeden < 10 && voeden > 1 || knuffelen > 10 && knuffelen < 1) {
        basic.showIcon(IconNames.Sad)
    } else if (false) {
        basic.showIcon(IconNames.Asleep)
    } else if (voeden > 10 && knuffelen > 10) {
        basic.showIcon(IconNames.Happy)
    }
})
