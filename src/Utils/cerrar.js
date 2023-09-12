let myModal = document.getElementById("exampleModal");
myModal.addEventListener("hidden.bs.modal", () => {
  console.log("Modal cerrado haciendo clic fuera del modal");
});
