  

// window.onload = cargada;

// function cargada(){

    
//     var agregar = document.querySelector(".agregar");
//     agregar.addEventListener('click', addUser);

// } // <= final de función "cargada()"

// function ocultar(){
//     document.querySelector("b").classList.toggle("ocultar");
// }

// function addUser(){
//     var usuario = document.getElementById("usuario");
//     var email = document.getElementById("email");
//     var ul = document.querySelector(".lista ul");
//     const msj =  document.getElementById("mensaje");

//     var li = document.createElement("li");
//     var textoli = document.createTextNode(`${usuario.value} : ${email.value}`);

//     li.appendChild(textoli);
//     ul.appendChild(li);

//     usuario.value = "";
//     email.value = "";

//     usuario.focus();

//     msj.innerHTML = "Agregado exitosamente!";
//     msj.style = "color: green; font-weight: bold;";

//     setTimeout(() => msj.innerHTML = '', 3000);
// }