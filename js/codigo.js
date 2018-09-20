//variaveis globais
const botao_adicionar = document.querySelector("#adicionar_dados");
const campo_data = document.querySelector("input[name='ano']");
const campo_nome = document.querySelector("input[name='nome']");
const corpo_tabela = document.querySelector("tbody");
const hoje = new Date();
const ano_atual = hoje.getFullYear();

//objetos
function Entrevista(nome, ano) {
    this.nome = nome;
    this.ano_informado = ano;
    this.calcular_idade = function () {
        return ano_atual - this.ano_informado;
    };
    this.mostrar_dados = function () {
        console.log ("O nome é " + this.nome + " o ano é " + this.ano_informado + " e a idade é " + this.calcular_idade()
        )
    }
        //tabela 
    this.criar_linha_tabela = function (){
        //Criar elementos
        const linha = document.createElement("tr");
        const campo_nome = document.createElement("td");
        const campo_ano = document.createElement("td");
        const campo_idade = document.createElement("td");
        //Aplicar um estilo aos elementos
        campo_nome.className = "bold";
        //Criar nós
        const texto_nome = document.createTextNode(this.nome);
        const texto_ano = document.createTextNode(this.ano_informado);
        const texto_idade = document.createTextNode(this.calcular_idade());
        //Vincular aos nós aos elementos
        campo_nome.appendChild(texto_nome);
        campo_ano.appendChild(texto_ano);
        campo_idade.appendChild(texto_idade);
        linha.appendChild(campo_nome);
        linha.appendChild(campo_ano);
        linha.appendChild(campo_idade);
        //vincular os elementos ao documento
        corpo_tabela.appendChild(linha);    
    };
    this.criar_pelo_template = function() {
        const template = document.querySelector("#template1");
        lista_td = template.Content.querySelectorAll("td");
        lista_td[0].textContent = this.nome;
        lista_td[1].textContent = this.ano_informado;
        lista_td[2].textContent = this.calcular_idade();
        const nova_linha = document.importNode(template.content, true);
        corpo_tabela.appendChild(nova_linha);
    }
}

//funçoes
function adicionar_dados(event){
    event.preventDefault();
    const ano_informado = campo_data.value;
    if ( ano_informado >= 1900 && ano_informado <= ano_atual){
        nova_entrevista = new Entrevista( campo_nome.value, campo_data.value);
        nova_entrevista.criar_pelo_template();
    } else {
        document.querySelector(".alerta").innerText = "Data invalida!";
    }
}
//rotina principal
botao_adicionar.addEventListener('click', adicionar_dados);
