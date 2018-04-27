function calculate(a, b, o) {
    switch (o) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b != 0)
                return a / b;
            else
                throw "Can not divide by 0";
        default:
            throw "Unsupported operation";
    }
}

module.exports = calculate;