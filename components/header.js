function menuComponent(el, contentfulData) {
  const menuComponentEl = document.createElement("div");
  menuComponentEl.innerHTML = `    
  <header class="header">
  <a href="./">  
  <img
    src="./resources/Juanda-logo2.png"
    alt=""
    class="header-logo"
    href="./contacto.html"
  />
  </a>
      <img src="./resources/burguer-img.svg" alt="" class="header-burguer" />
          <nav class="menu__desktop">
      <a class="menu__desktop-content" href="./portafolio.html">Portafolio</a>
      <a class="menu__desktop-content" href="./servicios.html">Servicios</a>
      <a class="menu__desktop-content" href="./contacto.html">Contacto</a>
    </nav>
    </header>

    <div class="menu">
      <img class="menu__close-window" src="./resources/close-X.svg" alt="" />
      <nav class="menu__container">
        <a class="menu__container-content" href="./portafolio.html"
          >Portafolio</a
        >
        <a class="menu__container-content" href="./portafolio.html"
          >Servicios</a
        >
        <a class="menu__container-content" href="./portafolio.html">Contacto</a>
      </nav>
    </div>
`;
  el.appendChild(menuComponentEl);

  //   Interacción con el burguer

  const menuEl = menuComponentEl.querySelector(".menu");
  const closeWindow = menuComponentEl.querySelector(".menu__close-window");
  const burguerEl = document.querySelector(".header-burguer");

  burguerEl.addEventListener("click", () => {
    menuEl.style.display = "flex";
  });

  closeWindow.addEventListener("click", () => {
    menuEl.style.display = "";
  });
}
