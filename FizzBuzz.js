//FIZBUZZ

let resultado = fizzBuzz(5);
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Não é um número';
    //quando o numero for divisível por 3 e por 5 vai retornar FizzBuzz
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    //se o numero for divisível somente por 3 vai retornar Fizz
    if (entrada % 3 === 0)
        return 'Fizz';
    //se o numero for divisível somente por 5 vai retornar Buzz
    if (entrada % 5 === 0)
        return 'Buzz';

    return entrada;
}