function footerComponent(el, contentfulData) {
  const footerComponentEl = document.createElement("div");
  footerComponentEl.innerHTML = `<footer class="footer">
      <div class="footer__container">
        <img
          src="./resources/Juanda-logo2.png"
          alt=""
          class="footer__logo"
        />

     <nav class="footer__nav">
      <div class="footer__nav-link">
        <img src="./resources/home.svg" alt="" class="footer__nav-icon" />
        <a href="./" class="footer__nav-anchor">Home</a>
      </div>
      <div class="footer__nav-link">
        <img src="./resources/user.svg" alt="" class="footer__nav-icon" />
        <a href="./servicios.html" class="footer__nav-anchor">Servicios</a>
      </div>
      <div class="footer__nav-link">
        <img src="./resources/phone.svg" alt="" class="footer__nav-icon" />
        <a href="./contacto.html" class="footer__nav-anchor">Contacto</a>
      </div>
    </nav>

    <div class="footer__socialmedia">
      <a
        href="https://www.linkedin.com/in/juandaor99/"
        class="footer__socialmedia-anchor"
        target="_blank"
        rel="noopener noreferrer">
      <img
          src="./resources/linkedin-logo.svg"
          alt=""
          class="socialmedia-logo"
        />
      </a>
      <a
        href="https://github.com/Juandaor99"
        class="footer__socialmedia-anchor"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img
          src="./resources/github-logo.svg"
          alt=""
          class="socialmedia-logo"
        />
      </a>
      <a href="https://x.com/JuandaNomad" 
      class="footer__socialmedia-anchor" 
      target="_blank" 
      rel="noopener noreferrer">
        <img src="./resources/x-logo.svg" alt="" class="socialmedia-logo" />
      </a>
    </div>
        <p class="footer__copyright">©2025 - https://apx.school</p>
      </div>
    </footer>
`;

  el.appendChild(footerComponentEl);
}
