let _1 = 0
let score = 0
basic.forever(function () {
    _1 = randint(0, 2)
    basic.pause(1000)
    basic.showNumber(score, 200)
    _1 = 4
})
basic.forever(function () {
    if (_1 == 0) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # #
            . # . # .
            . # . # .
            `)
    }
    if (_1 == 1) {
        basic.showLeds(`
            . # . # .
            . # . # .
            # # . # .
            . # . # .
            . # . # .
            `)
    }
    if (_1 == 2) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
    }
    if (_1 == 3) {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (_1 == 1) {
            _1 = 0
            score += 1
            basic.clearScreen()
        } else {
            _1 = 0
            score += score - 1
            basic.clearScreen()
        }
    }
    if (input.buttonIsPressed(Button.AB)) {
        if (_1 == 2) {
            _1 = 0
            score += 1
            basic.clearScreen()
        } else {
            _1 = 0
            score += score - 1
            basic.clearScreen()
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        if (_1 == 0) {
            _1 = 0
            score += 1
            basic.clearScreen()
        } else {
            _1 = 0
            score += score - 1
            basic.clearScreen()
        }
    }
})
