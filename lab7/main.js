const tryGuess = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1
    for (let i = 4; i >= 0; i--) {
        let userNumber = prompt('Введите число', '')
        if (isNumber(userNumber)) {
            if (userNumber == randomNumber) {
                confirm('Ты выиграл !')
                break
            } else {
                wrongNumber(userNumber, randomNumber)
                alert(`Попробуй ещё раз, осталось ${i} ${i == 1 ? 'попытка' : i == 0 ? 'попыток' : 'попытки'}`)
                if (i == 0) break
            }
        } else {
            alert('Ты ввёл не число или 0')
            confirm('Ты проиграл !')
            break
        }
    }
    alert('Чтобы сыграть ещё раз нажми на кнопку ниже')
}

const isNumber = (num) => {
    return isFinite(num) && !isNaN(num) && num != 0 && num != undefined
}

const wrongNumber = (userNumber, randomNumber) => {
    if (userNumber > randomNumber) alert('Загаданное число меньше твоего')
    if (userNumber < randomNumber) alert('Загаданное число больше твоего')
}
