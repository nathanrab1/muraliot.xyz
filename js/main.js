function clicou1(){
  console.log(this.responseText);//should be return value of 1
  var oReq = new XMLHttpRequest();
 oReq.open("get", "https://api.thingspeak.com/update?api_key=LZO5NSZVQGPBNP32&field1=1", true);
 // oReq.onload = redirecionar();
 // oReq.open("get", "179.113.61.116:1987/ledon", true);
 // oReq.send();
}

function clicou2(){
  console.log(this.responseText);//should be return value of 1
  var oReq = new XMLHttpRequest();
 oReq.open("get", "https://api.thingspeak.com/update?api_key=LZO5NSZVQGPBNP32&field1=0", true);
 // oReq.onload = redirecionar();
//oReq.open("get", "179.113.61.116:1987/ledoff", true);
//  oReq.send();
}

/*

function clicou(){
document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
//  document.getElementById("agradecimento");
  //console.log(document.getElementById("agradecimento"));
  //alert("Obrigado por clicar");
}

function redirecionar(){
  console.log(this.responseText);//should be return value of 1
  var oReq = new XMLHttpRequest();
  oReq.open("get", "https://api.thingspeak.com/update?api_key=LZO5NSZVQGPBNP32&field1=1", true);
//  oReq.onload = redirecionar();
  oReq.send();



//  window.open("https://api.thingspeak.com/update?api_key=LZO5NSZVQGPBNP32&field1=0");
//window.location.href = "https://api.thingspeak.com/update?api_key=LZO5NSZVQGPBNP32&field1=0";
}

function trocar(elemento){
elemento.innerHTML = "Thanks for that!";
//  console.log("Yeah!");
}

function voltar(elemento){
  elemento.innerHTML = "Passe o mouse aqui";
//document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

*/
/*

function soma(n1, n2){
  return n1 + n2;
}
alert(soma(17,3));

*/

/*

var d = new Date();
alert(d.getMonth());
alert(d.Hours());
*/


/*


var count = 0;
while (count <= 5){
  console.log(count);
  count = count + 1;
};
*/

/*

var idade = prompt("qual a sua idade?");
if (idade >= 18){
  alert("maior de idade");
}else{
  alert("menor de idade");
}
*/



// var fruta = [{nome:"john", cor:"guitarra"},{nome:"paul", cor:"baixo"}];
// console.log(fruta);
// console.log(fruta[0].nome + fruta[1].cor);


// var nome = "Obviam";
// var nivel = "Mestre ";
// var frase ="Japão é o melhor time do mundo";
// var lista = ["batata","abóbora","páprica"];
// //alert("Bem vindo " + nivel + nome);
// console.log(nome);
// console.log(frase.replace("Japão","Brasil"));
// console.log(lista.join(" - "));
