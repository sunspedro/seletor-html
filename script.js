function trocartexto(id, novotexto){
    const container = document.getElementById(id);
    const paragrafo = container.querySelector('p');

    if(paragrafo.innerText === "Olá"){
        paragrafo.innerText = "Tudo bem?";
    } else {
        paragrafo.innerText = "Olá"
    }

}
