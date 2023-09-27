const INPUT_Cep = document.getElementById('Cep');
const INPUT_LOGRADOURO = document.getElementById('LOGRADOURO');
const INPUT_NUMERO = document.getElementById('NUMERO');
const INPUT_BAIRRO = document.getElementById('BAIRRO');
const INPUT_CIDADE = document.getElementById('CIDADE');
const INPUT_UF = document.getElementById('UF');

INPUT_Cep.addEventListener('blur', () => {
   let Cep = INPUT_Cep.value;
    if (Cep.length !== 8) {
        return;
    }
    
    fetch(`https://viacep.com.br/ws/${Cep}/json/`)
         .then(resposta => resposta.json())
         .then(json => {
            INPUT_LOGRADOURO.value = json.LOGRADOURO;
            INPUT_Bairro.value = json.Bairro;
            INPUT_Cidade.value = json.Localidade;
            INPUT_UF.value = json.UF;
        
            INPUT_NUMERO.focus();
        });
})








