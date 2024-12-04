const API_URL_TEXTOS = "http://localhost:3000/api/textos";
const API_URL_IMAGENS = "http://localhost:3000/api/imagens";

const modalTexto = document.querySelector('#modalTexto');
const modalImagem = document.querySelector('#modalImagem');
const tbodyTexto = document.querySelector('#tbodyTexto');
const tbodyImagem = document.querySelector('#tbodyImagem');
const sTitulo = document.querySelector('#m-titulo');
const sTexto = document.querySelector('#m-texto');
const sDescricao = document.querySelector('#m-descricao');
const sImagemURL = document.querySelector('#m-imagem-url'); // campo de URL da imagem
const sImagemFile = document.querySelector('#m-imagem-file'); // campo de upload de arquivo
const dropZone = document.getElementById("dropZone");
const btnSalvarTexto = document.querySelector('#btnSalvarTexto');
const btnSalvarImagem = document.querySelector('#btnSalvarImagem');

let textos = [];
let imagens = [];
let editIdTexto = null;
let editIdImagem = null;

// Função para abrir o modal de edição de texto
function openModalTexto(edit = false, index = 0) {
  modalTexto.classList.add('active');
  modalTexto.onclick = (e) => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modalTexto.classList.remove('active');
    }
  };

  if (edit) {
    // Preencher os campos com os valores existentes para edição
    const texto = textos[index];
    document.querySelector('#m-pagina').value = texto.pagina;
    sTitulo.value = texto.titulo;
    sTexto.value = texto.texto;
    editIdTexto = texto.id; // Salva o ID para edição
  } else {
    // Limpar os campos para criar um novo texto
    document.querySelector('#m-pagina').value = '';
    sTitulo.value = '';
    sTexto.value = '';
    editIdTexto = null; // Define null para nova criação
  }
}

// Função para abrir o modal de edição de imagem
function openModalImagem(edit = false, index = 0) {
  modalImagem.classList.add('active');
  modalImagem.onclick = (e) => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modalImagem.classList.remove('active');
    }
  };

  if (edit) {
    sDescricao.value = imagens[index].descricao || '';
    sImagemURL.value = imagens[index].imagem || '';
    document.querySelector('#m-pagina').value = imagens[index].pagina || ''; // Garante que o campo 'pagina' seja exibido
    editIdImagem = imagens[index]._id; // MongoDB usa "_id"
  } else {
    sDescricao.value = '';
    sImagemURL.value = '';
    sImagemFile.value = null; // Limpa o campo de upload de arquivo
    document.querySelector('#m-pagina').value = ''; // Limpa o campo 'pagina'
    editIdImagem = null;
  }
}



// Função para carregar textos do banco de dados
async function loadTextos() {
  try {
    const response = await fetch(API_URL_TEXTOS);
    textos = await response.json();
    tbodyTexto.innerHTML = '';
    textos.forEach((item, index) => {
      insertTexto(item, index);
    });
  } catch (error) {
    console.error("Erro ao carregar textos:", error);
  }
}

// Função para carregar imagens do banco de dados
async function loadImagens() {
  try {
    const response = await fetch(API_URL_IMAGENS); // Verifica a URL
    if (!response.ok) throw new Error("Erro ao carregar imagens da API");
    
    imagens = await response.json();
    console.log("Imagens carregadas:", imagens); // Depuração para verificar os dados retornados

    tbodyImagem.innerHTML = '';
    imagens.forEach((item, index) => {
      insertImagem(item, index);
    });
  } catch (error) {
    console.error("Erro ao carregar imagens:", error);
  }
}


// Função para inserir um texto na tabela
function insertTexto(item, index) {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${item.pagina}</td>
        <td>${item.titulo}</td>
        <td>${item.texto}</td>
        <td class="acao">
          <button onclick="openModalTexto(true, ${index})"><i class='bx bx-edit'></i></button>
        </td>
  `;
  tbodyTexto.appendChild(tr);
}

// Função para inserir uma imagem na tabela
function insertImagem(item, index) {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${item.descricao}</td>
    <td>${item.pagina}</td>
    <td><img src="${item.imagem}" width="50" alt="${item.descricao}" /></td>
    <td class="acao">
      <button onclick="openModalImagem(true, ${index})"><i class='bx bx-edit'></i></button>
    </td>
  `;
  tbodyImagem.appendChild(tr);
}

// Função para salvar edições de texto
if (btnSalvarTexto) {
  btnSalvarTexto.onclick = async (e) => {
    e.preventDefault();

    // Obtenha os valores dos campos do modal
    const pagina = document.querySelector('#m-pagina').value;
    const titulo = sTitulo.value;
    const texto = sTexto.value;

    try {
      if (editIdTexto) {
        // Atualizar texto existente
        const response = await fetch(`${API_URL_TEXTOS}/${editIdTexto}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pagina, titulo, texto }),
        });
        if (!response.ok) {
          throw new Error("Erro ao atualizar texto.");
        }
        console.log("Texto atualizado com sucesso!");
      } else {
        // Criar novo texto
        const response = await fetch(API_URL_TEXTOS, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pagina, titulo, texto }),
        });
        if (!response.ok) {
          throw new Error("Erro ao salvar novo texto.");
        }
        console.log("Novo texto salvo com sucesso!");
      }

      modalTexto.classList.remove('active'); // Fecha o modal
      loadTextos(); // Atualiza a tabela
    } catch (error) {
      console.error(error.message);
    }
  };
}


// Função para salvar edições de imagem
if (btnSalvarImagem) {
  btnSalvarImagem.onclick = async (e) => {
    e.preventDefault();
    const descricao = sDescricao.value;
    let imagem = sImagemURL.value;
    const pagina = document.querySelector('#m-pagina').value; // Certifique-se de capturar o valor corretamente

    if (sImagemFile.files.length > 0) {
      const file = sImagemFile.files[0];
      imagem = URL.createObjectURL(file); // Usa uma URL temporária para exibição
    }

    try {
      if (editIdImagem) {
        // Atualização de imagem existente
        const response = await fetch(`${API_URL_IMAGENS}/${editIdImagem}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ descricao, imagem, pagina }),
        });
        if (response.ok) {
          console.log("Imagem atualizada com sucesso!");
        } else {
          console.error("Erro ao atualizar imagem.");
        }
      } else {
        // Inserção de uma nova imagem
        const response = await fetch(`${API_URL_IMAGENS}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ descricao, imagem, pagina }),
        });
        if (response.ok) {
          console.log("Nova imagem salva com sucesso!");
        } else {
          console.error("Erro ao salvar nova imagem.");
        }
      }
    } catch (error) {
      console.error("Erro ao salvar imagem:", error);
    }

    modalImagem.classList.remove('active');
    loadImagens();
  };
}



// Área de arrastar e soltar para upload de imagem
if (dropZone) {
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragover");
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragover");
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragover");

    if (e.dataTransfer.files.length > 0) {
      sImagemFile.files = e.dataTransfer.files;
    }
  });
}


// Carregar textos ou imagens conforme a página
if (tbodyTexto) {
  loadTextos();
}
if (tbodyImagem) {
  loadImagens();
}


