(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const menuCloseBtnRef = document.querySelector("[data-close-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const bodyLock = document.querySelector("body");
  const htmlLock = document.querySelector("html");
  
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    bodyLock.classList.toggle("lock");
    htmlLock.classList.toggle("lock");
  });

})();
