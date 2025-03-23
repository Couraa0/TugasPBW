const calculator = (operator, ...numbers) => {
    switch (operator) {
        case '+':
            return numbers.reduce((a, b) => a + b, 0);
        case '-':
            return numbers.reduce((a, b) => a - b);
        case '*':
            return numbers.reduce((a, b) => a * b, 1);
        case '/':
            return numbers.reduce((a, b) => a / b);
        case '%':
            return numbers.reduce((a, b) => a % b);
        case '&':
            return numbers.reduce((a, b) => a & b);
        default:
            return 'Operator tidak valid';
    }
};

console.log(calculator('+', 1, 2, 3, 4)); // Hasil: 10
console.log(calculator('-', 10, 5, 2)); // Hasil: 3
console.log(calculator('*', 2, 3, 4)); // Hasil: 24
console.log(calculator('/', 100, 5, 2)); // Hasil: 10
console.log(calculator('%', 10, 3)); // Hasil: 1
console.log(calculator('&', 5, 3)); // Hasil: 1
