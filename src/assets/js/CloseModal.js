export function CloseModal() {
  let modal = document.querySelector("#ModalFather");
  if (modal) {
    let backdrop = document.querySelector(".modal-backdrop ");
    modal.classList.remove("show");
    modal.style.display = "none";
    modal.removeAttribute("aria-modal");
    modal.removeAttribute("role");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    if (backdrop) {
      backdrop.remove();
    }
  }
}

export function handleNavbar(){
  let nav = document.querySelector("#ul-test")
  nav.body.style.display = "block";
  if (nav ){
  }
}