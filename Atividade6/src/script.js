function media()
{
    var nome = prompt("Digite o nome do aluno: ");
    var nota1 = parseFloat(prompt("Digite a primeira nota do aluno: "));
    var nota2 = parseFloat(prompt("Digite a segunda nota do aluno: "));
    var nota3 = parseFloat(prompt("Digite a terceira nota do aluno: "));

    var media = ((nota1 + nota2 + nota3)/3).toFixed(1);

    return(alert(`A média do aluno ${nome} é ${media}.`));
}

function operacoes()
{
    var num1 = parseFloat(prompt("Digite o primeiro número: "));
    var num2 = parseFloat(prompt("Digite o segundo número: "));

    soma = (num1 + num2).toFixed(2);
    sub = (num1 - num2).toFixed(2);
    mult = (num1 * num2).toFixed(2);
    div = (num1 / num2).toFixed(2);
    mod = (num1 % num2).toFixed(2);

    return(alert(`A soma de ${num1} e ${num2} é ${soma}\n A subtração de ${num1} e ${num2} é ${sub}\n A multiplicação de ${num1} e ${num2} é ${mult}\n A divisão de ${num1} e ${num2} é ${div}\n O resto da divisão de ${num1} e ${num2} é ${mod}\n`));
}