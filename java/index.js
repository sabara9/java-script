function perguntarIdade(){
    var idade = prompt("qual a sua idade?");
    alert("A sua idade é " + idade)
}

function mudaBackgrond(){
    document.getElementsByTagName("body")[0].style.
    backgrondColor = "red";

    var novoelemento = document.createElement("h2");
    novoelemento.innerHTML = "vermelho"
    novoelemento.style.color = "blue"
    document.getElementsByTagName("body")[0].appendChild(novoelemento)
}