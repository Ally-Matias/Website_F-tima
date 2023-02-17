// Seleciona os botões de filtro de categoria
const perfumesBtn = document.getElementById("perfumes-btn");
const cosmeticosBtn = document.getElementById("cosmeticos-btn");
const maquiagensBtn = document.getElementById("maquiagens-btn");
const higieneBtn = document.getElementById("higiene-btn");
const suplementosBtn = document.getElementById("suplementos-btn");
const infantilBtn = document.getElementById("infantil-btn");


// Seleciona todas as áreas de fotos da galeria
const photoAreas = document.querySelectorAll(".photoarea");

// Ficar já selecionado -----------------------------------------

// Exibe apenas as áreas de fotos da categoria "perfumes" quando a página for carregada
const perfumesAreas = document.querySelectorAll("#perfumes");
perfumesAreas.forEach(perfumesArea => {
  perfumesArea.style.display = "block";
});

// Esconde todas as áreas de fotos da categoria "cosmeticos" quando a página for carregada
const cosmeticosAreas = document.querySelectorAll("#cosmeticos");
cosmeticosAreas.forEach(cosmeticosArea => {
  cosmeticosArea.style.display = "none";
});

// Esconde todas as áreas de fotos da categoria "cosmeticos" quando a página for carregada
const maquiagensAreas = document.querySelectorAll("#maquiagens");
maquiagensAreas.forEach(maquiagensArea => {
  maquiagensArea.style.display = "none";
});

// Esconde todas as áreas de fotos da categoria "higiene" quando a página for carregada
const higieneAreas = document.querySelectorAll("#higiene");
higieneAreas.forEach(higieneArea => {
  higieneArea.style.display = "none";
});

// Esconde todas as áreas de fotos da categoria "suplementos" quando a página for carregada
const suplementosAreas = document.querySelectorAll("#suplementos");
suplementosAreas.forEach(suplementosArea => {
  suplementosArea.style.display = "none";
});

// Esconde todas as áreas de fotos da categoria "infantil" quando a página for carregada
const infantilAreas = document.querySelectorAll("#infantil");
infantilAreas.forEach(infantilArea => {
  infantilArea.style.display = "none";
});



// Ficar já selecionado -----------------------------------------

// evento click -----------------------------------------

// Define os eventos de clique dos botões de filtro
perfumesBtn.addEventListener("click", () => {
  // Esconde todas as áreas de fotos
  photoAreas.forEach(photoArea => {
    photoArea.style.display = "none";
  });
  // Mostra apenas as áreas de fotos da categoria "cosmeticos"
  const perfumesAreas = document.querySelectorAll("#perfumes");
  perfumesAreas.forEach(perfumesArea => {
    perfumesArea.style.display = "block";
  });
});


// Define os eventos de clique dos botões de filtro
cosmeticosBtn.addEventListener("click", () => {
  // Esconde todas as áreas de fotos
  photoAreas.forEach(photoArea => {
    photoArea.style.display = "none";
  });
  // Mostra apenas as áreas de fotos da categoria "cosmeticos"
  const cosmeticosAreas = document.querySelectorAll("#cosmeticos");
  cosmeticosAreas.forEach(cosmeticosArea => {
    cosmeticosArea.style.display = "block";
  });
});


// Define os eventos de clique dos botões de filtro
maquiagensBtn.addEventListener("click", () => {
  // Esconde todas as áreas de fotos
  photoAreas.forEach(photoArea => {
    photoArea.style.display = "none";
  });
  // Mostra apenas as áreas de fotos da categoria "maquiagens"
  const maquiagensAreas = document.querySelectorAll("#maquiagens");
  maquiagensAreas.forEach(maquiagensArea => {
    maquiagensArea.style.display = "block";
  });
});



// Define os eventos de clique dos botões de filtro
higieneBtn.addEventListener("click", () => {
  // Esconde todas as áreas de fotos
  photoAreas.forEach(photoArea => {
    photoArea.style.display = "none";
  });
  // Mostra apenas as áreas de fotos da categoria "higiene"
  const higieneAreas = document.querySelectorAll("#higiene");
  higieneAreas.forEach(higieneArea => {
    higieneArea.style.display = "block";
  });
});


// Define os eventos de clique dos botões de filtro
suplementosBtn.addEventListener("click", () => {
  // Esconde todas as áreas de fotos
  photoAreas.forEach(photoArea => {
    photoArea.style.display = "none";
  });
  // Mostra apenas as áreas de fotos da categoria "suplementos"
  const suplementosAreas = document.querySelectorAll("#suplementos");
  suplementosAreas.forEach(suplementosArea => {
    suplementosArea.style.display = "block";
  });
});


// Define os eventos de clique dos botões de filtro
infantilBtn.addEventListener("click", () => {
  // Esconde todas as áreas de fotos
  photoAreas.forEach(photoArea => {
    photoArea.style.display = "none";
  });
  // Mostra apenas as áreas de fotos da categoria "infantil"
  const infantilAreas = document.querySelectorAll("#infantil");
  infantilAreas.forEach(infantilArea => {
    infantilArea.style.display = "block";
  });
});