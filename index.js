function configurarBotonEnviar() {
  const boton = document.getElementById("btnEnviar");
  const input1 = document.getElementById("pregunta");
  const input2 = document.getElementById("pregunta1");
  const input3 = document.getElementById("pregunta2");

  if (boton && input1 && input2 && input3) {
    boton.addEventListener("click", function (event) {
      event.preventDefault();

      const texto1 = input1.value.trim();
      const texto2 = input2.value.trim();
      const texto3 = input3.value.trim();

      if (texto1 !== "" && texto2 !== "" && texto3 !== "") {
        Swal.fire({
          title: '<span style="color: white;">¡Mensaje enviado con éxito! 🎉</span>',
          icon: "success",
          background: 'rgba(0, 0, 0, 0.8',
          confirmButtonText: "Aceptar",
          confirmButtonColor: '#4CAF50'
        });

        input1.value = "";
        input2.value = "";
        input3.value = "";

      } else {
        Swal.fire({ 
          icon: "error",
          title: '<span style="color: white;">Campos incompletos</span>',
          text: "Por favor, completa todos los campos antes de enviar.",
          background: 'rgba(0, 0, 0, 0.8',
          confirmButtonText: "Entendido",
          confirmButtonColor: 'red'
        });
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", configurarBotonEnviar);