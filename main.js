statuss = "";
valor = "";
function setup(){
    cnv = createCanvas(480, 380);
    cnv.center();
    vd = createCapture(VIDEO);
    video.size(425, 425);
    vd.hide();
}
function start(){
    detector = ml5.objectDetector('cocossd', modeloCarregado);
    document.getElementById("status").innerHTML = "Detectando...";
    valor = document.getElementById("caixadetexto").value;
}
function modeloCarregado(){
    console.log("Modelo carregado");
}
function draw(){
    image(vd, 0, 0, 480, 380);
}