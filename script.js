function mudaSaidaInicial() {
    document.getElementById('conteudo__saida__inicial').style.display = 'none';
    document.getElementById('conteudo__saida__dados').style.display = 'block';
}

function escutaEventosBotao(){
    document.getElementById('botao__criptografar').addEventListener("click",criptografia);
    document.getElementById('botao__descriptografar').addEventListener("click",descriptografia);
    document.getElementById('botao__copiar').addEventListener("click",copiaMensagemModificada);
}

function mostraMensagemModificada(mensagemModificada){
    let campo__mensagemModificada = document.querySelector('.saida__dados__ajuste__texto');
    return campo__mensagemModificada.innerHTML = mensagemModificada;
}

function copiaMensagemModificada(){
    let mensagemModificada = document.getElementById("saida__dados__ajuste__texto").innerText;
    console.log(mensagemModificada);
    navigator.clipboard.writeText(mensagemModificada)
        .then(() => console.log("Texto copiado com sucesso!"))
        .catch(err => console.error("Falha ao copiar o texto:", err));
}

escutaEventosBotao();

function criptografia(){
    mudaSaidaInicial();

    let texto = document.querySelector('.conteudo__entrada__campo__input').value;
    let textoCriptografado = texto.replace(/e/g,'enter')
        .replace(/i/g,'imes')
        .replace(/a/g,'ai')
        .replace(/o/g,'ober')
        .replace(/u/g,'ufat');

    return mostraMensagemModificada(textoCriptografado);
}

function descriptografia(){
    mudaSaidaInicial();

    let texto = document.querySelector('.conteudo__entrada__campo__input').value;

    let textoDescriptografado = texto.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    return mostraMensagemModificada(textoDescriptografado);
}