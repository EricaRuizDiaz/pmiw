let imagen = [];
let Textos = [];
let sound;
let estado;
let medidas;
let botonInicio, botonSi, botonNo;



function preload() {
  for (let i = 0; i < 9; i++) {
    imagen[i] = loadImage("data/imagen" + i + ".jpeg");
      sound = loadSound("data/sound.mp3");
  }
  // Carga de textos una sola vez
  Textos = loadStrings("data/pikachu.txt");
}

function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 9; i++) {
    imagen[i].resize(640, 480);
  }
  estado = "inicio";

  botonInicio = {
    x: 240,
    y: 370,
    ancho: 100,
    alto: 40
  };

  botonSi = {
    x: 50,
    y: height - 100,
    ancho: 100,
    alto: 50
  };

  botonNo = {
    x: 480,
    y: height - 100,
    ancho: 100,
    alto: 50
  };

  medidas = {
    x: width / 2,
    y: height / 2,
    ancho: 640,
    alto: 480,
    alinea: CENTER
  };
}

function draw() {
  background(200);
  
  if (estado === "inicio") {
    cargaOtraImagen(imagen[0], medidas);
    dibujarBoton(botonInicio);
    mostrarTexto(Textos[0], width / 2, 120);
  } else if (estado === "primera") {
    cargaOtraImagen(imagen[1], medidas);
    dibujarBoton(botonInicio);
    mostrarTexto(Textos[1], width / 2, 120); 
  } else if (estado === "segunda") {
    cargaOtraImagen(imagen[2], medidas);
    dibujarBoton(botonInicio);
    mostrarTexto(Textos[2], width / 2, 120); 
  } else if (estado === "tercera") { 
    cargaOtraImagen(imagen[3], medidas);
    dibujarBoton(botonSi); 
  } else if (estado === "cuarta") {
    cargaOtraImagen(imagen[3], medidas);
    dibujarBoton(botonSi); 
    dibujarBoton(botonNo); 
    mostrarTexto(Textos[3], width / 2, 120); 
  } else if (estado === "quinta") {
    cargaOtraImagen(imagen[4], medidas);
    dibujarBoton(botonInicio);
  } else if (estado === "sexta") {
    cargaOtraImagen(imagen[5], medidas);
    dibujarBoton(botonInicio);
    mostrarTexto(Textos[4], width / 2, 120); 
  } else if (estado === "septima") {
    cargaOtraImagen(imagen[6], medidas);
    dibujarBoton(botonSi); 
    dibujarBoton(botonNo); 
    mostrarTexto(Textos[5], width / 2, 120); 
  } else if (estado === "octava") {
    cargaOtraImagen(imagen[7], medidas);
    dibujarBoton(botonSi); 
    mostrarTexto(Textos[6], width / 2, 120); 
  } else if (estado === "novena") {
    cargaOtraImagen(imagen[8], medidas);
    dibujarBoton(botonNo); 
  }
}
function mostrarTexto(texto, x, y) {
  fill(255);
  textSize(20);
  textAlign(CENTER);
  text(texto, x, y);
}

function mousePressed() {
  if (estado === "inicio") {
    if (detectarBoton(botonInicio)) {
      estado = "primera";
    }
  } else if (estado === "primera") {
    if (detectarBoton(botonInicio)) {
      estado = "segunda";
    }
  } else if (estado === "segunda") {
    if (detectarBoton(botonInicio)) {
      estado = "cuarta";
    }
  } else if (estado === "cuarta") {
    if (detectarBoton(botonSi)) {
      estado = "quinta";
    }
  } else if (estado === "quinta") {
    if (detectarBoton(botonInicio)) {
      estado = "sexta";
    }
  } else if (estado === "sexta") {
    if (detectarBoton(botonInicio)) {
      estado = "septima";
    }
  } else if (estado === "septima") {
    if (detectarBoton(botonSi)) {
      estado = "octava";
    }
    if (detectarBoton(botonNo)) {
      estado = "novena";
    }
  }
  if (!sound.isPlaying()) { 
    sound.play();
  } else {sound.continue();
}
}
function dibujarBoton(boton) {
  if (detectarBoton(boton)) {
    fill(0, 255, 255);
  } else {
    fill(0, 0, 255);
  }
  rect(boton.x, boton.y, boton.ancho, boton.alto, boton.alto / 4);
}

function detectarBoton(boton) {
  return mouseX > boton.x && mouseX < boton.x + boton.ancho &&
         mouseY > boton.y && mouseY < boton.y + boton.alto;
}

function cargaOtraImagen(imag, medidas) {
  imageMode(medidas.alinea); 
  image(imag, medidas.x, medidas.y, medidas.ancho, medidas.alto);
}
