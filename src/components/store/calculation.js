const calculationFunction = (value1, value2, operator) =>{
    const firstValue = +value1;
    const secondValue = +value2;
    switch(operator){
        case '+':
            return firstValue + secondValue;
        case '-':
            return firstValue - secondValue;
        case 'x':
            return firstValue * secondValue;
        case '÷':
            return firstValue / secondValue;
        default:
            return;
    }
}

export default calculationFunction;