var myModal = document.getElementById("exampleModal");
myModal.addEventListener("hidden.bs.modal", function () {
  console.log("Modal cerrado haciendo clic fuera del modal");
});
