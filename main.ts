input.onButtonPressed(Button.A, function () {
    if (knuffelen > 0) {
        knuffelen += 5
    }
})
input.onButtonPressed(Button.B, function () {
    if (voeden > 0) {
        voeden += 5
    }
})
let voeden = 0
let knuffelen = 0
knuffelen = 20
voeden = 20
let dood = 0
loops.everyInterval(1000, function () {
    knuffelen += -1
    voeden += -1
})
basic.forever(function () {
    if (voeden < 10 && voeden > 1 || knuffelen < 10 && knuffelen > 1) {
        basic.showIcon(IconNames.Sad)
    } else if (knuffelen < 1 || voeden < 1) {
        basic.showIcon(IconNames.Asleep)
        dood = 1
    } else if (voeden > 10 && knuffelen > 10) {
        basic.showIcon(IconNames.Happy)
    }
})
