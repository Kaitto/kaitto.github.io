/*
    Generar datos personales de personas ficticias
    https://randomuser.me/
*/
function actualizar_datos(data) {
  let name = data.results[0].name;
  let d = data.results[0];
  $("#data-name").html(`${name.title} ${name.first} ${name.last}`);
  $("#data-picture").attr("src", d.picture.medium);
  $("#data-picture").attr("hidden", false);
  $("#data-dob-date").html(`${d.dob.date}`);
  $("#data-dob-age").html(`${d.dob.age}`);
  $("#data-email").html(`${d.email}`);
  $("#data-id").html(`${d.id.name}: ${d.id.value}`);
  $("#data-location-city").html(`${d.location.city}`);
  $("#data-location-state").html(`${d.location.state}`);
  $("#data-location-country").html(`${d.location.country}`);
  $("#data-username").html(`${d.login.username}`)
  $("#data-phone").html(`${d.phone}`)
}
function generar_datos() {
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
      //Al recibir los datos, ejecutar esta funcion.
      console.log(data);
      if (data.results.length > 0) {
        actualizar_datos(data);
      } else {
        console.warn("No hay resultados desde randomuser.me");
      }
    },
    error: function (xhr, status, error) {
      //Si ocurre algun problema al generar/recibir los datos, ejecuta esto.
      console.warn(status)
    }
  });
}
generar_datos();

// Boton rápido para volver al inicio
let btnBack = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    btnBack.style.display = "block";
  } else {
    btnBack.style.display = "none";
  }
}
btnBack.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




