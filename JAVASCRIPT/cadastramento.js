//---------------------------------------------------DATA DE NASCIMENTO
calculoidade = () => {
    var dataNascimento = document.getElementById('nascimento')
    var dataAtual = new Date()
    var formatada = `${dataAtual.getFullYear()}-0${dataAtual.getMonth()+1}-${dataAtual.getDate()}`
    var nascimentoFormatada = dataNascimento.value
    console.log(nascimentoFormatada);
    var nasc = new Date(dataNascimento.value)
    var atual = new Date(formatada)
    

    let dif = Math.abs(atual - nasc)
    let miliDay = (1000*60*60*24*1)
    let tempo = Math.floor((dif / miliDay)/365)
    document.getElementById('idade').value=tempo
    
  }
  document.getElementById('nascimento').addEventListener('focusout', calculoidade);


//-------------------------------------------------BUSCA DE CEP
'use strict';

        const limparform = () => {
            document.getElementById('endereco').value = ''
            document.getElementById('bairro').value = ''
            document.getElementById('cidade').value = ''
            
        }

        const preencherFormlario = (endereco) => {
           
            document.getElementById('endereco').value = endereco.logradouro
            document.getElementById('bairro').value = endereco.bairro
            document.getElementById('cidade').value = endereco.localidade
            
        }

        const cepValido = (cep) => cep.length == 8 && /^[0-9]+$/.test(cep);

        const pesquisaCep = async() => {
            limparform(); 
            const cep = document.getElementById('cep').value;
            const url = `http://viacep.com.br/ws/${cep}/json/`;
            if (cepValido(cep)){
            const dados = await fetch(url);
            const endereco = await dados.json()
            if(endereco.hasOwnProperty('erro')){
                document.getElementById('endereco').value = 'Cep não encontrado'
                
            }else{
                preencherFormlario(endereco);
            }
            }else{
                document.getElementById('endereco').value = 'Cep invalido'
                
            }
            }
            
        document.getElementById('cep').addEventListener('focusout', pesquisaCep);


//--------------------------------------------------CONTATOS

//--------------------------------------------------BOTÃO
function cadastrar(){
    alert('Cadastro Realizado com sucesso!')
}