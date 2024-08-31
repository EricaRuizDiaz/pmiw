/*Erica Ruiz Diaz, comision 5*/
/**/
let opart;
let invertirColores = false; // Definimos variables
let grosorLineasBlancas = 4;
let grosorLineasFucsias = 4;

function preload() {
  opart = loadImage("data/opart.jpg"); // Cargamos la imagen antes de que se inicie el sketch
}

function setup() {
  createCanvas(800, 400); // 
  noLoop(); // Para que no se repita el draw automáticamente
}

function draw() {
  background(0, 191, 255); // Fondo celeste
  image(opart, 0, 0); // Mostramos la imagen
  
  if (invertirColores) {
    dibujarLineasInvertidas();
  } else {
    dibujarLineasOriginales();
  }
}

function keyPressed() {
  if (key === ' ') {
    invertirColores = !invertirColores; 
    redraw(); // Redibujamos la pantalla si cambiamos los colores
  } else if (key === 'r') {
    reiniciarPrograma(); 
    redraw(); // Redibujamos la pantalla si reiniciamos
  }
}

function mouseMoved() {
  if (mouseY < height / 2) {
    grosorLineasBlancas = 20; 
    grosorLineasFucsias = 4;  
  } else if (mouseY > height / 2) {
    grosorLineasBlancas = 4;  
    grosorLineasFucsias = 20; 
  } else {
    grosorLineasBlancas = 4;  
    grosorLineasFucsias = 4;  
  }
  redraw(); // Redibujamos la pantalla si movemos el mouse
}

function dibujarLineasOriginales() {
  strokeWeight(grosorLineasBlancas);
  
  // Líneas blancas
  stroke(255); 
  for (let i = 408; i < 807; i += 16) {
    line(i, i, i, 0);
  }

  strokeWeight(grosorLineasFucsias);

  // Líneas celestes
  stroke(1, 19, 131); 
  for (let i = 550; i <= 1050; i += 15) {
    line(400, i, 390, height);
  }

  strokeWeight(4);

  // Líneas fucsias
  stroke(255, 0, 255); 
  for (let i = 406; i <= 805; i += 20) {
    line(i, 0, i, height);
  }

  // Líneas doradas
  stroke(216, 185, 2); 
  for (let i = 402; i <= 803; i += 13) {
    line(i, 0, i, height);
  }

  // Líneas negras
  stroke(54, 53, 46); 
  for (let i = 400; i <= 800; i += 60) {
    line(i, 0, i, height);
  }
}

function dibujarLineasInvertidas() {
  strokeWeight(grosorLineasBlancas);

  // Líneas invertidas
  stroke(0); 
  for (let i = 408; i < 807; i += 16) {
    line(i, i, i, 0);
  }

  strokeWeight(grosorLineasFucsias);

  stroke(255, 0, 255); 
  for (let i = 550; i <= 1050; i += 15) {
    line(400, i, 390, height);
  }

  strokeWeight(4);

  // Líneas fucsias
  stroke(255, 216, 2); 
  for (let i = 402; i <= 803; i += 13) {
    line(i, 0, i, height);
  }

  // Líneas doradas
  stroke(216, 185, 2); 
  for (let i = 402; i <= 803; i += 13) {
    line(i, 0, i, height);
  }

  // Líneas negras
  stroke(54, 53, 46); 
  for (let i = 400; i <= 800; i += 60) {
    line(i, 0, i, height);
  }
}

function reiniciarPrograma() {
  invertirColores = false;
  grosorLineasBlancas = 4;
  grosorLineasFucsias = 4;
}
