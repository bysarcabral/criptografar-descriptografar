function removerConteudoSaida() {
    document.getElementById('conteudo__saida').style.display = 'none';
}

function pegaMensagem(){
    document.getElementById('botao__criptografar').addEventListener("click",criptografia);
    document.getElementById('botao__descriptografar').addEventListener("click",descriptografia);
}

pegaMensagem();

function criptografia(){
    let texto = document.querySelector('.conteudo__entrada__campo__input').value;
    console.log('Criptografia em ação');
}

function descriptografia(){
    console.log('Descriptografia em ação');
}