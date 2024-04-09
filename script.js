let tela_filme = document.getElementById('tela-filme')
let tela_filme1 = document.getElementById('tela-filme1')
let tela_filme2 = document.getElementById('tela-filme2')
let tela_filme3 = document.getElementById('tela-filme3')
let tela_filme4 = document.getElementById('tela-filme4')
let tela_filme5 = document.getElementById('tela-filme5')
const loginMail = ['sociedade@cinefila.com', 'vinicios_marcospok@hotmail.com', 'testemail@test.com']
const password = ['sociedade', '963258741', 'teste123']
let invalid = document.getElementById('invalid')

function clique() {

    const login = document.getElementById('loginMail')
    const senha = document.getElementById('password')

    if(loginMail.includes(login.value) && password.includes(senha.value) && loginMail.indexOf(login.value) == password.indexOf(senha.value)){
        document.location.href = "inicio.html"
    } else {
        invalid.removeAttribute("hidden")
    }
  
}

/* VIVRE SA VIE */

function abrir(){
    tela_filme.removeAttribute("hidden")
    document.body.style.overflowY = 'hidden' 
    document.location.href = '#conteudo'
}

function fechar(){
    tela_filme.setAttribute("hidden", "hidden")
    document.body.style.overflowY = 'visible'
}

document.addEventListener('keydown', function(evento){
    if (evento.keyCode == 27){
        tela_filme.setAttribute("hidden", "hidden")
        document.body.style.overflowY = 'visible'
    }
})

function abrir_filme(){
    document.location.href = "vivresavie.html"
}

/* The Poushkeepsie Tapes */

function abrir1(){
    tela_filme1.removeAttribute("hidden")
    document.body.style.overflowY = 'hidden' 
    document.location.href = '#conteudo'
}

function fechar1(){
    tela_filme1.setAttribute("hidden", "hidden")
    document.body.style.overflowY = 'visible'
}

document.addEventListener('keydown', function(evento){
    if (evento.keyCode == 27){
        tela_filme1.setAttribute("hidden", "hidden")
        document.body.style.overflowY = 'visible'
    }
})

function abrir_filme1(){
    document.location.href = "The Poughkeepsie Tapes.html"
}