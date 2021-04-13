var nivelDificuldade = Number(window.prompt("Escolha o nível de velocidade da bolinha. De 1 a 15."))

var corBolinha = 0;
var corTabuleiro = "#1F8340";

var altura = 400;
var largura = 600;

var dBolinha = 20;
var xBolinha = 300;
var yBolinha = 200;

var velocidadeXBolinha = nivelDificuldade;
var velocidadeYBolinha = nivelDificuldade;

function setup() {
  createCanvas(largura, altura);
}

function criarTabuleiro(){
  background(corTabuleiro);
}

function Bolinha(){
  circle(xBolinha, yBolinha, dBolinha);
  fill(corBolinha);
}

function movimentarBolinha(){
  xBolinha = xBolinha + velocidadeXBolinha;
  yBolinha = yBolinha + velocidadeYBolinha;
}

function verificarColisao(){
    if(xBolinha >= (600-(dBolinha/2)) || xBolinha < (dBolinha/2)){
    velocidadeXBolinha = -1 * velocidadeXBolinha;
  }
  if(yBolinha >= (400-(dBolinha/2)) || yBolinha < (dBolinha/2)){
    velocidadeYBolinha = -1 * velocidadeYBolinha;
  }
  if (xBolinha == (largura - (dBolinha/2)) || xBolinha <= 0 - (dBolinha/2)){
    xBolinha = largura/2;
    yBolinha = largura/2;
  }
}

function draw() {
  criarTabuleiro();
  Bolinha();
  verificarColisao();
  movimentarBolinha();
}