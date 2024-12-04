const mongoose = require("mongoose");

// Conecte-se ao MongoDB
mongoose.connect(`mongodb+srv://felipeduarteabc:WXoAiBrlPayO9Qw3@cluster0.vpmed.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => console.log("MongoDB conectado"))
  .catch((error) => console.error("Erro ao conectar ao MongoDB:", error));

// Esquemas de exemplo
const TextoSchema = new mongoose.Schema({
  id: { type: String, required: true },
  pagina: { type: String, required: true },
  titulo: { type: String, required: true },
  texto: { type: String, required: true },
});

const ImagemSchema = new mongoose.Schema({
  id: { type: String, required: true },
  pagina: { type: String, required: true },
  imagem: { type: String, required: true }, // URL ou caminho da imagem
  descricao: { type: String, required: true },
});


const filmeSchema = new mongoose.Schema({
  id: String,
  titulo: String,
  sinopse: String
});

const Texto = mongoose.model("textos", TextoSchema);
const Imagem = mongoose.model("imagens", ImagemSchema);
const Filme = mongoose.model("filmes", filmeSchema);

module.exports = { Texto, Imagem }; 

// Dados de exemplo
const textos = [
  {
    id: "3",
    pagina: "Projeto Semear",
    titulo: "Projeto Semear",
    texto: "O Projeto Semear traz como base os dois pilares que estabelecem os objetivos, princípios e diretrizes da legislação específica da assistência social brasileira, a Constituição Federal de 1988 e a Lei Orgânica da Assistência Social. Atende os princípios legais de Proteção Social Básica por destinar os seus serviços, programas e proteções sociais de acolhimento, convivência e socialização aos adultos com deficiência intelectual, múltiplas deficiências, transtorno do espectro autista e suas respectivas famílias."
  }
];

const imagens = [
  { id: "6", 
    pagina: "Projeto semear",
    descricao: "Imagem ia", 
    imagem: "https://cdn.pixabay.com/photo/2024/06/01/14/00/ai-8802304_1280.jpg" },
];

const filmes = [
  { id: "1", titulo: "Novo Título", sinopse: "Novo conteúdo de texto" },
  { id: "2", titulo: "Mais um Título", sinopse: "Outro conteúdo de texto" },
  { id: "3", titulo: "Mais um Título", sinopse: "Outro conteúdo de texto" }
];
// Inserir dados

async function seedDatabase() {
  await Texto.insertMany(textos);
  console.log("Dados inseridos com sucesso");
  mongoose.connection.close();
}

seedDatabase();
