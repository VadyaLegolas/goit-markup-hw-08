(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  const bodyLock = document.querySelector("body");
  const htmlLock = document.querySelector("html");

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");

    bodyLock.classList.toggle("lock");
    htmlLock.classList.toggle("lock");
  }
})();
