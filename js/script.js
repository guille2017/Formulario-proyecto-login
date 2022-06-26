document.querySelector("#login_btn").setAttribute("onclick", "validacion()");
let user = document.querySelector("#username");
let pass = document.querySelector("#password");
let mens = document.querySelector("#mensaje");
mens.className = "rojo";
//console.log(user, " - ", pass, " - ", mens);

function validacion() {
  if (user.value.trim().length === 0) {
    // dumny
    mens.value = "FALTA NOMBRE DE USUARIO";
    user.value = "";
    user.focus();

    return;
  }
  pass.value = pass.value.trim();

  if (pass.value.trim() === "") {
    // dumny
    mens.value = "FALTA PASSWORD";
    pass.value = "";
    pass.focus();
    return;
  }
  mens.className = "verde";
  mens.value = "PERFECTO, INGRESA...";
}
