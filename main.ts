let _1 = 0
let score = 0
basic.forever(function () {
    _1 = randint(0, 1)
    basic.pause(1000)
    if (input.buttonIsPressed(Button.AB)) {
        basic.showNumber(score)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.pause(150)
    }
    if (!(input.buttonIsPressed(Button.AB))) {
        if (_1 == 0) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . #
                . . # . .
                . . # . .
                `)
        }
        if (_1 == 1) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . .
                . . # . .
                . . # . .
                `)
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.pause(150)
    }
    if (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            if (_1 == 1) {
                _1 = 4
                score += 1
                basic.clearScreen()
            } else {
                _1 = 4
                basic.clearScreen()
                score = score - 1
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (_1 == 0) {
                _1 = 4
                score += 1
                basic.clearScreen()
            } else {
                _1 = 4
                basic.clearScreen()
                score = score - 1
            }
        }
    }
})
