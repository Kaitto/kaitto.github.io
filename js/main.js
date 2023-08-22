/*
    Generar datos personales de personas ficticias
    https://randomuser.me/
*/
function actualizar_datos(data) {
  let name = data.results[0].name;
  const txtName=`${name.title} ${name.first} ${name.last}`;
  let d = data.results[0];
  let eNames=document.getElementsByClassName("data-name");
  for (e of eNames){
    e.textContent=txtName;
  };
  $("#data-name").html(txtName);

  $("#data-picture").attr("src", d.picture.large);
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
// Ajustes de anchor (los links no tienen en cuenta el tamaño del navbar flotante)
// Debería ser constante (excepto al desplegar)
const nav_height = $('#navbar').height() +16;
// Al hacer click
$('.nav-link').click(function(e){
  let divCoords = $(e.target.hash).offset();
  e.preventDefault();
  window.scrollTo({
  left: divCoords.left, 
  top: divCoords.top - nav_height,
  behavior: 'smooth'
  });
});


