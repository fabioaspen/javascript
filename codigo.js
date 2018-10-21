//variaveis globais
var botao_adicionar = document.querySelector("#adicionar_dados");
var campo_data = document.querySelector("input[name='ano']");
var campo_nome = document.querySelector("input[name='nome']");
var corpo_tabela = document.querySelector("tbody");
var hoje = new Date();
var ano_atual = hoje.getFullYear();

function calcularIdade(){
    return ano_atual - campo_data.value;
}

function criartabela(){
    //criar elementos
    var linha = document.createElement("tr");
    var nome = document.createElement("td");
    var ano = document.createElement("td");
    var idade = document.createElement("td");

    //ligar elementos
    nome.textContent = campo_nome.value;
    ano.textContent = campo_data.value;
    idade.textContent = calcularIdade();

    linha.appendChild(nome);
    linha.appendChild(ano);
    linha.appendChild(idade);

    corpo_tabela.appendChild(linha);
    campo_data.value = "";
    campo_nome.value = "";
}

function criartemplate(){
    var template = document.getElementById("template1");
    var lista = template.content.cloneNode(true);

    lista.querySelectorAll("td")[0].innerHTML = campo_nome.value;
    lista.querySelectorAll("td")[1].innerHTML = campo_data.value;
    lista.querySelectorAll("td")[2].innerHTML = calcularIdade();

    corpo_tabela.appendChild(lista);
    campo_nome.value = "";
    campo_data.value = "";
}

//funçoes
function adicionar_dados(event){
    event.preventDefault();
    var ano_informado = campo_data.value;
    if ( ano_informado >= 2000 && ano_informado <= ano_atual){
        criartemplate();
    } else {
        document.getElementsByClassName("alerta")[0].innerHTML = "Data invalida!"
        document.querySelector(".alerta").style.color="red";
    }
}
//rotina principal
botao_adicionar.addEventListener('click', adicionar_dados);
