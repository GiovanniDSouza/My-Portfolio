
// Seleciona os elementos
const fundoBorrado = document.getElementById('fundo-borrado');
const simButton = document.getElementById('sim');
const naoButton = document.getElementById('nao');
const centralizar = document.getElementById('centralizar');
const carrossel = document.getElementById('carrossel');

const lerTextoTwo = document.getElementById('lerTexto');
const pararLeituraTwo = document.getElementById('pararLeitura');


// Quando o usuário clicar em "Sim"
simButton.addEventListener('click', () => {
    fundoBorrado.style.visibility = 'hidden';
    fundoBorrado.style.opacity = '0';
    centralizar.style.visibility = 'visible';
    carrossel.style.visibility = 'visible';
    lerTextoTwo.style.visibility = 'visible';
    pararLeituraTwo.style.visibility = 'visible';
});

// Quando o usuário clicar em "Não"
naoButton.addEventListener('click', () => {
    fundoBorrado.style.visibility = 'hidden';
    fundoBorrado.style.opacity = '0';
    centralizar.style.visibility = 'visible';
    carrossel.style.visibility = 'visible';
    lerTextoTwo.style.visibility = 'visible';
    pararLeituraTwo.style.visibility = 'visible';
});

 // Evento de clique no botão "Sim"
 document.getElementById("sim").addEventListener("click", function() {
    // Chama a função de leitura
    lerTexto();
    
    // Fecha a tela mini
    document.getElementById("fundo-borrado").style.display = "none";
    console.log(" Sim.");
  });

  // Evento de clique no botão "Não"
  document.getElementById("nao").addEventListener("click", function() {
    // Fecha a tela mini sem fazer nada
    document.getElementById("fundo-borrado").style.display = "none";
    console.log(" Não.");
  });

const menuIcon = document.getElementById('burger');
        const navLinks = document.querySelector('.nav-links');

        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        let indiceAtual = 0;

function moverCarrossel(direcao) {
    const certificados = document.querySelectorAll('.certificado');
    const totalCertificados = certificados.length;

    // Atualizar o índice atual
    indiceAtual += direcao;

    // Loop de carrossel
    if (indiceAtual < 0) {
        indiceAtual = totalCertificados - 1;
    } else if (indiceAtual >= totalCertificados) {
        indiceAtual = 0;
    }

    // Mover o carrossel
    const carrossel = document.querySelector('.carrossel');
    carrossel.style.transform = `translateX(-${indiceAtual * 100}%)`;
}



function lerTexto() {
    const texto = document.getElementById("conteudo").textContent;
  
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = "pt-BR";  // Garante que o idioma seja português
  
    // Obtenha a lista de vozes disponíveis
    const voces = window.speechSynthesis.getVoices();
  
    // Encontre uma voz com o idioma pt-BR (português brasileiro)
    let vozPortugues = null;
    for (let i = 0; i < voces.length; i++) {
      if (voces[i].lang === "pt-BR") {
        vozPortugues = voces[i];
        break;
      }
    }
  
    // Se encontrar uma voz em português, usa ela. Caso contrário, usa a primeira voz disponível
    if (vozPortugues) {
      utterance.voice = vozPortugues;
    } else {
      console.log("Voz em português não encontrada, utilizando a voz padrão.");
      utterance.voice = voces[0];  // Caso não encontre a voz em português, usa a primeira voz disponível
    }
  
    // Definindo a velocidade da fala (valor entre 0 e 10)
    utterance.rate = 1;  // Padrão: 1.0 (Velocidade média)
  
    // Definindo o volume (valor entre 0 e 1)
    utterance.volume = 1;  // Padrão: 1.0 (Volume máximo)
  
    window.speechSynthesis.speak(utterance);
  }
  
  // Função para parar a leitura
  function pararLeitura() {
    window.speechSynthesis.cancel();  // Cancela a leitura em andamento
    console.log("Leitura parada.");
  }
  
  // Para garantir que a leitura pare ao recarregar a página
  window.onload = function() {
    // Cancela qualquer leitura em andamento ao carregar a página
    window.speechSynthesis.cancel();
    console.log("Leitura interrompida ao recarregar a página.");
  }
  
  // Event listeners para os botões
  document.getElementById("lerTexto").addEventListener("click", lerTexto);
  document.getElementById("pararLeitura").addEventListener("click", pararLeitura);  // Novo listener para parar a leitura
  


