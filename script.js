function reajustarSalario () {
    let nomeDoFuncionario = document.getElementById('nomeDoFuncionario').value;
    let salarioAtual = document.getElementById('salarioAtual').value;
    let porcentagem = document.getElementById('porcentagem').value;

    let mostrarNome = document.querySelector('.nome > span');
    let mostraSalarioAtual = document.querySelector('.salarioAtual > span');
    let mostrarAumento = document.querySelector('.aumento > span');
    let mostraNovoSalario = document.querySelector('.novoSalario > span');
    
    let conversao;

    if (porcentagem < 10) {
        conversao =  1 + '.0' + porcentagem;
    } else {
        conversao =  1 + '.' + porcentagem;
    }

    let novoSalario = (salarioAtual * conversao).toFixed(2);
    let aumento = (novoSalario - salarioAtual).toFixed(2);

    mostrarNome.innerHTML = nomeDoFuncionario;
    mostraSalarioAtual.innerHTML = salarioAtual + ' R$';
    mostrarAumento.innerHTML = aumento + ' R$';
    mostraNovoSalario.innerHTML = novoSalario + ' R$';
}
document.getElementById('btnReajust').addEventListener('click', reajustarSalario);