
document.querySelector("#formulario").addEventListener('submit', validar)

let nome = document.forms['formulario']['nome']
let idade = document.forms['formulario']['idade']
let email = document.forms['formulario']['email']

let nomeDeusuario =document.querySelector("#nome")
let idadeDeusuario =document.querySelector("#idade")
let emailDeusuario =document.querySelector("#email")


function validar(evento){
evento.preventDefault()


if(nome.value == "" ){
    const valor = document.querySelector("#span")
    nomeDeusuario.classList.add("erro")
      
       valor.innerHTML= "prencha o campo vazio"
return
}else{
    const valor = document.querySelector("#span")
    valor.innerHTML= ""
    nomeDeusuario.classList.remove("erro")
}


if(idade.value == "" ){
    const idade = document.querySelector("#spanidade")

    idadeDeusuario.classList.add("erro")  
   idade.innerHTML= "prencha o campo vazio"

return
}else{
    const idade = document.querySelector("#spanidade")
    idade.innerHTML= ""
idadeDeusuario.classList.remove("erro")
}


if(email.value == "" ){
    const email = document.querySelector("#spanemail")
    emailDeusuario.classList.add("erro")
   email.innerHTML= "prencha o campo vazio"

   return
}else{
    const email = document.querySelector("#spanemail")
    email.innerHTML= ""
    emailDeusuario.classList.remove("erro")
}




}