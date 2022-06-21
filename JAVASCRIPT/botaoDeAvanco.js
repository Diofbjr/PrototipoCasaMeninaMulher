
function avancarPagina(url){
    document.getElementById('conteudo').innerHTML = ''
        

            
        let ajax = new XMLHttpRequest();
console.log(ajax.readyState);
//requisição nao iniciada
ajax.open('GET',url);
console.log(ajax.readyState);
        //requisição iniciada 

        //logica

        ajax.onreadystatechange = () =>{
            if(ajax.readyState == 4 && ajax.status == 200){

    document.getElementById('conteudo').innerHTML = ajax.responseText
    cep()
    
}
if(ajax.readyState == 4 && ajax.status == 404){

    document.getElementById('conteudo').innerHTML = 'ERROR'

}
        }





ajax.send();

       }



//--------------------------------------------------------------------------BUSCA CEP

       function cep(){
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
    }