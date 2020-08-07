(() => {
    const backdropOverBtnRef = document.querySelector("[data-menu-over]");
    const backdropBtnRef = document.querySelector("[data-backdrop]");
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
  
    menuBtnRef.addEventListener("click", () => {
      const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
  
      mobileMenuRef.classList.toggle("is-open");
      
      backdropOverBtnRef.classList.toggle("menu-over");
      
      backdropBtnRef.classList.toggle("menu-backdrop");

      mobileMenuRef.classList.toggle("menu-scrol");
    });
  })();