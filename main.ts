let item = 0
input.onButtonPressed(Button.A, function () {
    item = randint(0, 10)
    basic.showNumber(randint(0, 10))
    basic.clearScreen()
})
