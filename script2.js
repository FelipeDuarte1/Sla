document.getElementById('descer6').addEventListener('click', function(){
    document.getElementById('alvo6').scrollIntoView({behavior:'smooth'
});
});

document.getElementById('descer7').addEventListener('click', function(){
    document.getElementById('alvo7').scrollIntoView({behavior:'smooth'
});
});

document.getElementById('descer8').addEventListener('click', function(){
    document.getElementById('alvo8').scrollIntoView({behavior:'smooth'
});
});

document.getElementById('descer9').addEventListener('click', function(){
    document.getElementById('alvo9').scrollIntoView({behavior:'smooth'
});
});

document.getElementById('descer10').addEventListener('click', function(){
    document.getElementById('alvo10').scrollIntoView({behavior:'smooth'
});
});

document.getElementById('descer11').addEventListener('click', function(){
    document.getElementById('alvo11').scrollIntoView({behavior:'smooth'
});
});

document.getElementById('descer12').addEventListener('click', function(){
    document.getElementById('alvo12').scrollIntoView({behavior:'smooth'
});
});


let currentIndex3 = 0;

function showSlide3(index3) {
    const slides3 = document.querySelectorAll('.carousel3-item');
    if (index3 >= slides3.length) {
        currentIndex3 = 0;
    } else if (index3 < 0) {
        currentIndex3 = slides3.length - 1;
    } else {
        currentIndex3 = index3;
    }
    slides3.forEach((slide3, k) => {
        slide3.classList.toggle('active', k === currentIndex3);
    });
}

function nextSlide3() {
    showSlide3(currentIndex3 + 1);
}

function prevSlide3() {
    showSlide3(currentIndex3 - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide3(currentIndex3);
});



setInterval(() => {
nextSlide3();
}, 5000);


let currentIndex4 = 0;

function showSlide4(index4) {
    const slides4 = document.querySelectorAll('.carousel4-item');
    if (index4 >= slides4.length) {
        currentIndex4 = 0;
    } else if (index4 < 0) {
        currentIndex4 = slides4.length - 1;
    } else {
        currentIndex4 = index4;
    }
    slides4.forEach((slide4, l) => {
        slide4.classList.toggle('active', l === currentIndex4);
    });
}

function nextSlide4() {
    showSlide4(currentIndex4 + 1);
}

function prevSlide4() {
    showSlide4(currentIndex4 - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide4(currentIndex4);
});



setInterval(() => {
nextSlide4();
}, 5000);


let currentIndex5 = 0;

function showSlide5(index5) {
    const slides5 = document.querySelectorAll('.carousel5-item');
    if (index5 >= slides5.length) {
        currentIndex5 = 0;
    } else if (index5 < 0) {
        currentIndex5 = slides5.length - 1;
    } else {
        currentIndex5 = index5;
    }
    slides5.forEach((slide5, m) => {
        slide5.classList.toggle('active', m === currentIndex5);
    });
}

function nextSlide5() {
    showSlide5(currentIndex5 + 1);
}

function prevSlide5() {
    showSlide5(currentIndex5 - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide5(currentIndex5);
});



setInterval(() => {
nextSlide5();
}, 5000);


let currentIndex6 = 0;

function showSlide6(index6) {
    const slides6 = document.querySelectorAll('.carousel6-item');
    if (index6 >= slides6.length) {
        currentIndex6 = 0;
    } else if (index6 < 0) {
        currentIndex6 = slides6.length - 1;
    } else {
        currentIndex6 = index6;
    }
    slides6.forEach((slide6, n) => {
        slide6.classList.toggle('active', n === currentIndex6);
    });
}

function nextSlide6() {
    showSlide6(currentIndex6 + 1);
}

function prevSlide6() {
    showSlide6(currentIndex6 - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide6(currentIndex6);
});



setInterval(() => {
nextSlide6();
}, 5000);


let currentIndex7 = 0;

function showSlide7(index7) {
    const slides7 = document.querySelectorAll('.carousel7-item');
    if (index7 >= slides7.length) {
        currentIndex7 = 0;
    } else if (index7 < 0) {
        currentIndex7 = slides7.length - 1;
    } else {
        currentIndex7 = index7;
    }
    slides7.forEach((slide7, o) => {
        slide7.classList.toggle('active', o === currentIndex7);
    });
}

function nextSlide7() {
    showSlide7(currentIndex7 + 1);
}

function prevSlide7() {
    showSlide7(currentIndex7 - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide7(currentIndex7);
});



setInterval(() => {
nextSlide7();
}, 5000);



let currentIndex8 = 0;

function showSlide8(index8) {
    const slides8 = document.querySelectorAll('.carousel8-item');
    if (index8 >= slides8.length) {
        currentIndex8 = 0;
    } else if (index8 < 0) {
        currentIndex8 = slides8.length - 1;
    } else {
        currentIndex8 = index8;
    }
    slides8.forEach((slide8, p) => {
        slide8.classList.toggle('active', p === currentIndex8);
    });
}

function nextSlide8() {
    showSlide8(currentIndex8 + 1);
}

function prevSlide8() {
    showSlide8(currentIndex8 - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide8(currentIndex8);
});



setInterval(() => {
nextSlide8();
}, 5000);


let currentIndex9 = 0;

function showSlide9(index9) {
    const slides9 = document.querySelectorAll('.carousel9-item');
    if (index9 >= slides9.length) {
        currentIndex9 = 0;
    } else if (index9 < 0) {
        currentIndex9 = slides9.length - 1;
    } else {
        currentIndex9 = index9;
    }
    slides9.forEach((slide9, q) => {
        slide9.classList.toggle('active', q === currentIndex9);
    });
}

function nextSlide9() {
    showSlide9(currentIndex9 + 1);
}

function prevSlide9() {
    showSlide9(currentIndex9 - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide9(currentIndex9);
});



setInterval(() => {
nextSlide9();
}, 5000);


function lerElementos2() {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    } else {
      const elementos2 = document.querySelectorAll('.ler_texto2');
      elementos2.forEach(elemento2 => {
        const texto2 = elemento2.textContent;
        const utterance2 = new SpeechSynthesisUtterance(texto2);
        window.speechSynthesis.speak(utterance2);
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
  

  
  
  
  
  // Adiciona o evento de clique ao botão
  document.getElementById('lerTexto2').addEventListener('click', lerElementos2);