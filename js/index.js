const inputEmail = document.querySelector(".input-email");
const inputSenha = document.querySelector(".input-senha");
const btnEnviar = document.querySelector(".btn__enviar");
const mensagem = document.getElementById("snackbar");

const email = 'mateus@gmail.com';
const senha = '123';

let emailValidado = false;
let senhaValidada = false;

inputEmail.addEventListener("blur", ()=>{
    if(inputEmail.value == email) {
        inputEmail.style.borderColor = "green";
        emailValidado = true;
    } else {
        inputEmail.style.borderColor = "red";
        emailValidado = false;
    }
})

inputSenha.addEventListener("blur", ()=>{

    if(inputSenha.value == senha) {
        inputSenha.style.borderColor = "green";
        senhaValidada = true;
    } else {
        inputSenha.style.borderColor = "red";
        senhaValidada = false;
    }
})

btnEnviar.addEventListener("click", (event) => {
    event.preventDefault();

    if(inputEmail.value.length > 0 && inputSenha.value.length > 0){
        if((emailValidado && senhaValidada)==true){
            toastBar("Login realizado com sucesso");
            inputEmail.focus();
            inputEmail.value = "";
            inputSenha.value = ""
        } else {
            toastBar("Senha ou email incorreto!");
            inputSenha.focus();
            inputSenha.value = ""
        }

    } else {
        toastBar("Preencha todos os campos");
        inputEmail.focus();
    }

})

function toastBar(texto){
    mensagem.innerHTML = texto;
    mensagem.className = "show";
    setTimeout(()=>{ mensagem.className = mensagem.className.replace("show", ""); }, 3000);
}
   

  