

window.onload = cargada;
function cargada(){
    var buscador = $("#table").DataTable();
    
    $("#input-search").keyup(function(){
        buscador.search($(this).val()).draw();
        if($("#input-search").val() == ""){
            $(".content-search").fadeOut();
        }else{
            $(".content-search").fadeIn();
        }
    });

}// <= aqui termina la funcion "cargada()"





