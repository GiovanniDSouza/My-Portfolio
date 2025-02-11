// Função para iniciar a leitura
function iniciarLeitura() {
    const conteudo = document.getElementById("mensagem-inicial").textContent;

    const comandoFala = new SpeechSynthesisUtterance(conteudo);
    comandoFala.lang = "pt-BR";

    // Definindo uma voz específica
    const vozes = window.speechSynthesis.getVoices();
    comandoFala.voice = vozes[8];  // Ajuste o índice conforme necessário

    // Definindo a velocidade e o volume da fala
    comandoFala.rate = 1;
    comandoFala.volume = 1;

    window.speechSynthesis.speak(comandoFala);
}

/*Garantir que a leitura seja iniciada quando a página for carregada
window.onload = function() {
    iniciarLeitura();  // Chama a função assim que a página é carregada
};*/

//testando modos





