/*
    Generar datos personales de personas ficticias
    https://randomuser.me/
*/
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
        //Al recibir los datos, ejecutar esta funcion.
      console.log(data);
      if (data.results.length > 0) {
        let name=data.results[0].name;
        $("#nombre").html(`${name.title} ${name.first} ${name.last}`);
        $("#img_perfil").attr("src",data.results[0].picture.medium);
        $("#img_perfil").attr("hidden",false);
      } else {
        console.warn("No hay resultados desde randomuser.me");
      }
      //$("nombre").html=data.name
      //data.name
    },
    error: function(xhr, status, error) {
        //Si ocurre algun problema al generar/recibir los datos, ejecuta esto.
      console.warn(status)
    }
});





     