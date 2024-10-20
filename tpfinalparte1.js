// Erica Ruiz Diaz 119765/0// //Aylen Bustamante 118978/1 // COMISION 5 //
// link https://youtu.be/hY8HHzlss6o
let imagen = [];
let Textos = [];
let sound;
let estado;

function preload() {
  for (let i = 0; i < 27; i++) {
    imagen[i] = loadImage("data/imagen" + i + ".jpeg");
  }
  sound = loadSound("data/sound.mp3");
  Textos = loadStrings("data/pikachu.txt");
  console.log(Textos.length);
}

function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 27; i++) {
    imagen[i].resize(640, 480);
  }
  estado = 0;
}

function draw() {
  background(200);
  cargarEstado(estado);

  fill(0, 0, 255); 
  textSize(20); 
  textAlign(LEFT); 
  
  if (estado < Textos.length && Textos[estado]) { 
    mostrarTexto(Textos[estado], width / 2, 120);
  }
}

function cargarEstado(estado) {
  cargaOtraImagen(imagen[estado], { x: width / 2, y: height / 2, ancho: 640, alto: 480, alinea: CENTER });

  if (estado === 0) {
    dibujarBotonInicio();
  }

  if (estado === 1 || estado === 2 || estado === 4 || estado === 5 || estado === 6 || estado === 8 || estado === 9 || estado === 10 || estado === 13 || estado === 14 || estado === 15 || estado === 17 || estado === 18 || estado === 19 || estado === 21 || estado === 22 || estado === 23 || estado === 24) {
    
    dibujarBotonSiguiente();
  } 

  if (estado === 3 || estado === 7 || estado === 11 || estado === 16) {
    botonSi();
    botonNo();
  }
  
  if (estado === 12 || estado === 20 || estado === 25 || estado === 26) {
    botonReiniciar();
  }

 if (estado === 0 || estado === 26){
    BotonCreditos();
  }
}


function mousePressed() {
  
  if (ClickBotonSiguiente()) {
    estado += 1; 
  } 
  
  if (ClickBotonSi()) {
    if (estado === 3) {
      estado = 4;
    } else if (estado === 7) {
      estado = 8; 
    } else if (estado === 11) {
      estado = 13;
    } else if (estado === 16) {
      estado = 17;
    } 
  }
  
  if (ClickBotonNo()) {
    if (estado === 3) {
      estado = 6; 
    } else if (estado === 6) {
      estado = 7;
    } else if (estado === 7) {
      estado = 11;
    } else if (estado === 11) {
      estado = 12; // final 1 
    } else if (estado === 16) {
      estado = 21;
    }
  }

  
  if (ClickBotonReiniciar()) {
    estado = 0;  
  }

 if (!sound.isPlaying()) {
    sound.play(); 
  }
}

function cargaOtraImagen(imag, medidas) {
  imageMode(medidas.alinea);
  image(imag, medidas.x, medidas.y, medidas.ancho, medidas.alto);
}

function mostrarTexto(texto, x, y) {
  fill(0, 0, 0, 150);
  let anchoCuadro = 615;
  let altoCuadro = 200;
  rect(x - anchoCuadro / 2, y - altoCuadro / 2 - 15, anchoCuadro, altoCuadro, 100);

  fill(255);
  textSize(25);
  textAlign(CENTER);
  let limiteTexto = 580;
  let a = width / 2 - 300;
  let b = 30;
  text(texto, a, b, limiteTexto);
}

function dibujarBotonInicio() {
  let x = 240;
  let y = 320;
  let ancho = 100;
  let alto = 40;

 fill(0, 0, 255); 
  rect(x, y, ancho, alto, alto / 4);  
  fill(255); 
  textSize(20); 
  text('inicio', x + ancho / 2, y + alto / 2); 
}

function dibujarBotonSiguiente() {
  let x = 240;
  let y = 320;
  let ancho = 100;
  let alto = 40;

  fill(0, 0, 255); 
  rect(x, y, ancho, alto, alto / 4);  
  fill(255); 
  textSize(20); 
  text('Siguiente', x + ancho / 2, y + alto / 2); 
}

function botonSi() {
  let x = 50;
  let y = height - 100;
  let ancho = 100;
  let alto = 50;

  fill(0, 0, 255);  
  rect(x, y, ancho, alto, alto / 4);  
  fill(255);
  textSize(20);  
  text('Sí', x + ancho / 2, y + alto / 2); 
}

function botonNo() {
  let x = 480;
  let y = height - 100;
  let ancho = 100;
  let alto = 50;

  fill(0, 0, 255); 
  rect(x, y, ancho, alto, alto / 4);  
  fill(255);
  textSize(20);  
  text('No', x + ancho / 2, y + alto / 2); 
}

function ClickBotonSi() {
  let x = 50;
  let y = height - 100;
  let ancho = 100;
  let alto = 50;

  return mouseX > x && mouseX < x + ancho &&
         mouseY > y && mouseY < y + alto;
}

function ClickBotonNo() {
  let x = 480;
  let y = height - 100;
  let ancho = 100;
  let alto = 50;

  return mouseX > x && mouseX < x + ancho &&
         mouseY > y && mouseY < y + alto;
}

function botonReiniciar() {
  let x = 380;
  let y = height - 100;
  let ancho = 100;
  let alto = 50;

  fill(250, 0, 0);  
  rect(x, y, ancho, alto, alto / 4);  
  fill(255);  
  textSize(20); 
  text('Reiniciar', x + ancho / 2, y + alto / 2); 

  if (mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto && mouseIsPressed) {
    estado = 0;  
  }
}


function ClickBotonSiguiente() {
  let x = 240;
  let y = 320;
  let ancho = 100;
  let alto = 40;

  return mouseX > x && mouseX < x + ancho &&
         mouseY > y && mouseY < y + alto;
}

function ClickBotonReiniciar() {
  let x = 380;
  let y = height - 100;
  let ancho = 100;
  let alto = 50;

  return mouseX > x && mouseX < x + ancho &&
         mouseY > y && mouseY < y + alto;
}
function BotonCreditos() {
 let x = 240;
  let y = 410;
  let ancho = 100;
  let alto = 40;

 fill(255, 105, 180) 
  rect(x, y, ancho, alto, alto / 4);  
  fill(255);  
  textSize(20); 
  text('creditos', x + ancho / 2, y + alto / 2); 

  if (mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto && mouseIsPressed) {
    estado = 26;  
  }
}
function ClickBotonCreditos() {
 let x = 240;
  let y = 410;
  let ancho = 100;
  let alto = 40;

  return mouseX > x && mouseX < x + ancho &&
         mouseY > y && mouseY < y + alto;
}
