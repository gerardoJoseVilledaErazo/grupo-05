

window.onload = cargada;
function cargada(){
    $(function(){
        $.scrollUp({
            scrollImg: true            // Set true to use image
        });
      });

    //funcion del buscador
      var buscador = $("#table").DataTable();
    
      $("#input-search").keyup(function(){
          buscador.search($(this).val()).draw();
          if($("#input-search").val() == ""){
              $(".content-search").fadeOut();
          }else{
              $(".content-search").fadeIn();
          }
      });

      
    var agregar = document.querySelector(".agregar");
    agregar.addEventListener('click', addUser);



}// <= aqui termina la funcion "cargada()"

function addUser(){
    var usuario = document.getElementById("usuario");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var ul = document.querySelector(".lista ul");
    var li = document.createElement("li");
    var textoli = document.createTextNode(`Bienvenido: ${usuario.value} : ${email.value} !!!`);
    const msj =  document.getElementById("mensaje");

    
    // li.appendChild(textoli);
    // ul.appendChild(li);

    // usuario.value = "";
    // email.value = "";
    // password.value = "";

    if(password.value != "" && usuario.value != ""){
        li.appendChild(textoli);
        ul.appendChild(li);

        msj.innerHTML = "Agregado exitosamente " +usuario.value+ "!";
        msj.style = "color: white; font-weight: bold; font-size: 20px;";
    }

    usuario.focus();

    // msj.innerHTML = "Agregado exitosamente!";
    // msj.style = "color: green; font-weight: bold;";

    setTimeout(() => msj.innerHTML = '', 3000);
}


    $(".agregar").click(function(e){
        var usuario = $("#usuario").val();
        // var usuario = document.getElementById("usuario");

        var password = $("#password").val();
        // var password = document.getElementById("password");

        var email = $("#email").val();
        // var email = document.getElementById("email");

        sessionStorage.setItem("usuario", usuario);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("password", password);

        if(usuario == "" || email == "" || password =="" ){  
            alert("Usuario, email y password obligatorios");
            e.preventDefault();              

        }else{ 
            alert("Agregado exitosamente. Bienvenido");
            
        }
    });



    
    $(document).ready(function(){
        var usuario = sessionStorage.getItem("usuario");
        var password = sessionStorage.getItem("password");
        if(password == "admin" && usuario == "Usuario"){
             $("b").text("Bienvenido " + usuario + "!");

        }
    });


    $(document).ready(function(){
        /* https://www.youtube.com/watch?v=xRveT8RV_Oo */
        $('section[data-type="parallax-section"]').each(function(){
            var $bgobj = $(this);
            $(window).scroll(function(){
                $window =$(window); /*sino dara un error de declaracion de variable o dira que no esta declarada */
                var yPos = -($window.scrollTop() / $bgobj.data('speed'));
                var coords = '50% ' + yPos + 'px';

                $bgobj.css({backgroundPosition: coords});
            });
        }); /*leer acerca de la funcion each */

    });