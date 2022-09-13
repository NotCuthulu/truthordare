input.onButtonPressed(Button.A, function () {
    TrueOrDare = randint(0, 1)
    if (TrueOrDare == 0) {
        basic.showString("Truth")
    }
    if (TrueOrDare == 1) {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    Arrow_Direction = randint(0, 3)
    if (Arrow_Direction == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (Arrow_Direction == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (Arrow_Direction == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (Arrow_Direction == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
let Arrow_Direction = 0
let TrueOrDare = 0
TrueOrDare = 0
