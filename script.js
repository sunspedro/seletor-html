function trocartexto(id, novotexto){
    const container = document.getElementById(id);
    const paragrafo = container.querySelector('p');

    if(paragrafo.innerText === "Planejar"){
        paragrafo.innerText = "Contabilidade";
    } else {
        paragrafo.innerText = "Planejar"
    }

}