$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

        // Validado Nombre ==============================
        if( $('#names').val() == '' ){
            errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else{
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Correo ==============================
        if( $('#email').val() == '' ){
            errores += '<p>Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else{
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });
    const select = document.querySelector("#nombreCategoria");
const url = 'http://country.io/names.json';

fetch(url, {
    method: 'GET',
  })
  .then(res => res.json())
  .then(lista_de_categorias => {
    // console.log("Las categorías son:", lista_de_categorias);
    // alert('HAY ' + lista_de_categorias.length) Puedes poner este alert para ver si la llamada POST te devuelve algo

    for (let categoria of lista_de_categorias) {
      let nuevaOpcion = document.createElement("option");
      nuevaOpcion.value = categoria.id;
      nuevaOpcion.text = categoria.name;
      select.add(nuevaOpcion);
      // select.appendChild(nuevaOpcion); <-- Así tambien funciona
    }
  })
  .catch(function(error) {
    console.error("¡Error!", error);
  })

});
