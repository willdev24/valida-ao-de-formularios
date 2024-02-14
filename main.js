
document.querySelector("#formulario").addEventListener('submit', validar)

let nome = document.forms['formulario']['nome']
let idade = document.forms['formulario']['idade']
let email = document.forms['formulario']['email']

let nomeDeusuario =document.querySelector("#nome")
let idadeDeusuario =document.querySelector("#idade")
let emailDeusuario =document.querySelector("#email")

const listaValores =[nomeDeusuario,idadeDeusuario,emailDeusuario]

function validar(e){
e.preventDefault()

if(nome.value == "" && idade.value == "" && email.value == "" ){

for(let index = 0 ; index < listaValores.length; index++){
    const valor = document.querySelector("#span")
    listaValores[index].classList.add("erro")      
     valor.innerHTML= "prencha o campo vazio"

     document.querySelector("#spanidade").innerHTML= "prencha o campo vazio"
     document.querySelector("#spanemail").innerHTML= "prencha o campo vazio"

}    
}else if(nome.value == "" ){

    const nome = document.querySelector("#span")

    nomeDeusuario.classList.add("erro")  
    nome.innerHTML= "prencha o campo vazio"

}else{
    const valor = document.querySelector("#span")
    valor.innerHTML= ""
    nomeDeusuario.classList.remove("erro")
}


if(idade.value == "" ){
    const idade = document.querySelector("#spanidade")

    idadeDeusuario.classList.add("erro")  
   idade.innerHTML= "prencha o campo vazio"

}else{
    const idade = document.querySelector("#spanidade")
    idade.innerHTML= ""
idadeDeusuario.classList.remove("erro")
}


if(email.value == "" ){
    const email = document.querySelector("#spanemail")
    emailDeusuario.classList.add("erro")
   email.innerHTML= "prencha o campo vazio"


}else{
    const email = document.querySelector("#spanemail")
    email.innerHTML= ""
    emailDeusuario.classList.remove("erro")
}

const inpu1 = e.target[0]
const inpu2 = e.target[1]
const inpu3 = e.target[2]

const erro1 =inpu1.classList.contains("erro")
const erro2 =inpu2.classList.contains("erro")
const erro3 =inpu3.classList.contains("erro")

if( erro1 == true || erro2 == true ||  erro3 == true){
alert("erro ao enviar")
    
}else{
alert("arquivo enviado com sucesso")

}

}
