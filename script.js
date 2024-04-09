let tela_filme = document.getElementById('tela-filme')
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

function abrir(){
    tela_filme.removeAttribute("hidden")
}

function fechar(){
    tela_filme.setAttribute("hidden", "hidden")
}