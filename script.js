
let stringValue = ''
let inputExp = document.getElementById('inputValue')

inputExp.value = '0'

let buttons = document.querySelectorAll('button')

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', () => {
        if (button.value == 'AC') {
            inputExp.value = '';
            stringValue = ''
        }
        else if (button.value == '=') {
            inputExp.value = eval(inputExp.value);
            stringValue = inputExp.value;

        }
        else if (button.value == 'DEL') {
            let stringLength = stringValue.length
            stringValue = stringValue.slice(0, (stringLength - 1))
            inputExp.value = stringValue

            console.log(stringValue)
        }
        else {
            let clickString = button.value;
            stringValue += clickString
            inputExp.value = stringValue

        }

    })
})
