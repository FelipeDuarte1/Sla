
// elementos para descer a tela

document.getElementById('descer1').addEventListener('click', function(){
    document.getElementById('alvo1').scrollIntoView({behavior:'smooth'
});
});

document.getElementById('descer2').addEventListener('click', function(){
    document.getElementById('alvo2').scrollIntoView({behavior:'smooth'
});
});


document.getElementById('descer3').addEventListener('click', function(){
    document.getElementById('alvo3').scrollIntoView({behavior:'smooth'
});
});

document.getElementById('descer4').addEventListener('click', function(){
    document.getElementById('alvo4').scrollIntoView({behavior:'smooth'
});
});

document.getElementById('descer5').addEventListener('click', function(){
    document.getElementById('alvo5').scrollIntoView({behavior:'smooth'
});
});


function lerElementos() {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    } else {
      const elementos = document.querySelectorAll('.ler_texto');
      elementos.forEach(elemento => {
        const texto = elemento.textContent;
        const utterance = new SpeechSynthesisUtterance(texto);
        window.speechSynthesis.speak(utterance);
      });
    }
  }

  
  
  
  
  // Adiciona o evento de clique ao botão
  document.getElementById('lerTexto').addEventListener('click', lerElementos);
  
  
  let currentIndex = 0;

  function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex = index;
    }
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentIndex);
    });
  }
  
  function nextSlide() {
    showSlide(currentIndex + 1);
  }
  
  function prevSlide() {
    showSlide(currentIndex - 1);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
  });
  

setInterval(() => {
  nextSlide();
}, 5000);


let currentIndex2 = 0;

function showSlide2(index2) {
    const slides2 = document.querySelectorAll('.carousel2-item');
    if (index2 >= slides2.length) {
        currentIndex2 = 0;
    } else if (index2 < 0) {
        currentIndex2 = slides2.length - 1;
    } else {
        currentIndex2 = index2;
    }
    slides2.forEach((slide2, j) => {
        slide2.classList.toggle('active', j === currentIndex2);
    });
}

function nextSlide2() {
    showSlide2(currentIndex2 + 1);
}

function prevSlide2() {
    showSlide2(currentIndex2 - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide2(currentIndex2);
});



setInterval(() => {
nextSlide2();
}, 5000);


let currentIndexp = 0;

function showSlidep(indexp) {
    const slidesp = document.querySelectorAll('.carouselp-item');
    if (indexp >= slidesp.length) {
        currentIndexp = 0;
    } else if (indexp < 0) {
        currentIndexp = slidesp.length - 1;
    } else {
        currentIndexp = indexp;
    }
    slidesp.forEach((slidep, a) => {
        slidep.classList.toggle('active', a === currentIndexp);
    });
}

function nextSlidep() {
    showSlidep(currentIndexp + 1);
}

function prevSlidep() {
    showSlidep(currentIndexp - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlidep(currentIndexp);
});



setInterval(() => {
nextSlidep();
}, 5000);


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
