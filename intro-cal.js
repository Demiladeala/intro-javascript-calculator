console.log('Basic Arithmetic Calculator\n');

const Calc = prompt(`1 - ADDITION
2 - SUBTRACTION
3 - DIVISION
4 - MULTIPLICATION
5 - MODULUS: \n`);

if (Calc === '1') {
    console.log(`ADDITION`);
    const num1 = parseInt(prompt(`num1: `) );
    const num2 = parseInt(prompt(`num2: `));
    const result = num1 + num2;
    window.alert(`${num1} + ${num2} = ${result}`);
} else if(Calc === '2') {
    console.log(`SUBTRACTION`);
    const num1 = parseInt(prompt(`num1: `) );
    const num2 = parseInt(prompt(`num2: `));
    const result = num1 - num2;
    window.alert(`${num1} - ${num2} = ${result}`);
}
else if(Calc === '3') {
    console.log(`DIVISION`);
    const num1 = parseInt(prompt(`num1: `) );
    const num2 = parseInt(prompt(`num2: `));
    const result = num1 / num2;
    window.alert(`${num1} / ${num2} = ${result}`);
}
else if(Calc === '4') {
    console.log(`MULTIPLICATION`);
    const num1 = parseInt(prompt(`num1: `) );
    const num2 = parseInt(prompt(`num2: `));
    const result = num1 * num2;
    window.alert(`${num1} * ${num2} = ${result}`);
}
else if(Calc === '5') {
    console.log(`MODULUS`);
    const num1 = parseInt(prompt(`num1: `) );
    const num2 = parseInt(prompt(`num2: `));
    const result = num1 % num2;
    window.alert(`${num1} % ${num2} = ${result}`);
}
else{
    window.alert('error! You have entered a wrong command');
}