let chave = "9c62cb8fad8c78882fa63905ba10748d"

function mostrarNaTela(dados) {
    console.log(dados)

    document.querySelector("h2").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".desc").innerHTML = dados.weather[0].description
    document.querySelector(".umid").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}


async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave +
    "&lang=pt_br" +
    "&units=metric")
    .then(resposta => resposta.json())
    
    mostrarNaTela(dados)
}



function cliqueiNoBotao(){
    let cidade = document.querySelector("input").value
    
    buscarCidade(cidade)
}
