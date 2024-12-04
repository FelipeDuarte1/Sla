

async function obterTextos() {
  const response = await fetch('http://localhost:3000/textos');
  const textos = await response.json();

  // Itera sobre os textos e preenche os elementos no HTML
  for (let texto of textos) {
    const tituloElemento = document.querySelector(`#titulo-${texto.id}`);
    const textoElemento = document.querySelector(`#texto-${texto.id}`);

    if (tituloElemento) tituloElemento.textContent = texto.titulo;
    if (textoElemento) textoElemento.textContent = texto.texto;
  }
}

// Chama a função após o carregamento da página
document.addEventListener('DOMContentLoaded', obterTextos);



function lerElementos5() {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    } else {
      const elementos5 = document.querySelectorAll('.ler_texto5');
      elementos5.forEach(elemento5 => {
        const texto5 = elemento5.textContent;
        const utterance5 = new SpeechSynthesisUtterance(texto5);
        window.speechSynthesis.speak(utterance5);
      });
    }
  }

  function toggleLogin() {
    var loginContainer = document.getElementById('loginContainer');
    var escurecer = document.getElementById('escurecer');
    if (loginContainer.style.display === 'block') {
        loginContainer.style.display = 'none';
        escurecer.style.display = 'none';
    } else {
        loginContainer.style.display = 'block';
        escurecer.style.display = 'block';
    }
  }
  

  document.getElementById('lerTexto5').addEventListener('click', lerElementos5);