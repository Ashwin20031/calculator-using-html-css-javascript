document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.output input');
    const clearButton = document.querySelector('.output p');
    const numbers = document.querySelectorAll('.numbers p:not(.operator)');
    const operators = document.querySelectorAll('.operator');

    let currentInput = '';
    let previousInput = '';
    let operator = '';
    let result = '';

    numbers.forEach(number => {
        number.addEventListener('click', () => {
            currentInput += number.textContent;
            display.value = currentInput;
        });
    });

    // clearButton.addEventListener("click",()=>{
    //     display?.value=""
    // })

    operators.forEach(op => {
        op.addEventListener('click', () => {
            const operatorText = op.textContent;

            if (operatorText === 'C') {
                currentInput = '';
                previousInput = '';
                operator = '';
                result = '';
                display.value = '';
            } else if (operatorText === '=') {
                if (previousInput && currentInput && operator) {
                    result = calculate(previousInput, currentInput, operator);
                    display.value = result;
                    previousInput = result;
                    currentInput = '';
                    operator = '';
                }
            } else {
                if (currentInput) {
                    if (operator) {
                        previousInput = calculate(previousInput, currentInput, operator);
                        display.value = previousInput;
                    } else {
                        previousInput = currentInput;
                    }
                    currentInput = '';
                    operator = operatorText;
                }
            }
        });
    });

    function calculate(num1, num2, operator) {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        switch (operator) {
            case '+':
                return (number1 + number2).toString();
            case '-':
                return (number1 - number2).toString();
            case 'x':
                return (number1 * number2).toString();
            case '/':
                return (number1 / number2).toString();
            default:
                return '';
        }
    }
});
