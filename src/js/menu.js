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

      // mobileMenuRef.classList.toggle("menu-scrol");

    });
    
    // mobile link

    const menuLinkBtn1Ref = document.querySelector("[data-link-button1]");

    menuLinkBtn1Ref.addEventListener("click", () => {
      menuBtnRef.classList.toggle("is-open");

      mobileMenuRef.classList.toggle("is-open");

      backdropOverBtnRef.classList.toggle("menu-over");

      backdropBtnRef.classList.toggle("menu-backdrop");

    });

    const menuLinkBtn2Ref = document.querySelector("[data-link-button2]");

    menuLinkBtn2Ref.addEventListener("click", () => {
      menuBtnRef.classList.toggle("is-open");

      mobileMenuRef.classList.toggle("is-open");

      backdropOverBtnRef.classList.toggle("menu-over");

      backdropBtnRef.classList.toggle("menu-backdrop");

    });

    const menuLinkBtn3Ref = document.querySelector("[data-link-button3]");

    menuLinkBtn3Ref.addEventListener("click", () => {
      menuBtnRef.classList.toggle("is-open");

      mobileMenuRef.classList.toggle("is-open");

      backdropOverBtnRef.classList.toggle("menu-over");

      backdropBtnRef.classList.toggle("menu-backdrop");

    });

    const menuLinkBtn4Ref = document.querySelector("[data-link-button4]");

    menuLinkBtn4Ref.addEventListener("click", () => {
      menuBtnRef.classList.toggle("is-open");
      
      mobileMenuRef.classList.toggle("is-open");

      backdropOverBtnRef.classList.toggle("menu-over");

      backdropBtnRef.classList.toggle("menu-backdrop");

    });

    const menuLinkBtn5Ref = document.querySelector("[data-link-button5]");

    menuLinkBtn5Ref.addEventListener("click", () => {
      menuBtnRef.classList.toggle("is-open");

      mobileMenuRef.classList.toggle("is-open");

      backdropOverBtnRef.classList.toggle("menu-over");

      backdropBtnRef.classList.toggle("menu-backdrop");

    });

    //gallery

    let n = 1;
    let i = 0;
    let  bgHeader = "bg-header-";
    const galleryBtn1Ref = document.querySelector("[data-gallery-button]");
    const galleryRef = document.querySelector("[data-gallery]");

      //gallery forward

      galleryBtn1Ref.addEventListener("click", () => {
        if(n == 3) {
          n = 1;
          bgHeader = "bg-header-" + n;
          galleryRef.classList.toggle(bgHeader);
          galleryRef.classList.toggle("bg-header-" + 2);
          galleryRef.classList.toggle("bg-header-" + 3);
          i = 1;
        }
        else if(n == 2) {
          n = 3;
          bgHeader = "bg-header-" + n;
          galleryRef.classList.toggle(bgHeader);
        }
        else if(i == 1) {
          i = 0;
          n = 2;
          bgHeader = "bg-header-" + n;
          galleryRef.classList.toggle(bgHeader);
          galleryRef.classList.toggle("bg-header-" + 1);
        }
        else if(n == 1) {
          n = 2;
          bgHeader = "bg-header-" + n;
          galleryRef.classList.toggle(bgHeader);
        }
    });
})();