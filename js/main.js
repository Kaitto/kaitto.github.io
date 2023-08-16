/*
    Generar datos personales de personas ficticias
    https://randomuser.me/
*/
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
});


     