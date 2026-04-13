function servicesComponent(el, contentfulData, page) {
  const servicesComponentEl = document.createElement("div");
  servicesComponentEl.innerHTML = ` 
<section class="services">
      <h2 class="services__title">
        Mis <span class="services__title2">Servicios</span>
      </h2>
      <div class="services__cards">
      </div>

      <div class="services__cards-extra" style="display: none;">
      </div>

      <div class="services__buttons">
        <div class="downArrow-container" style="display: none;">
          <img src="./resources/ver-mas.svg" alt="" class="button-icon" />
          <button class="downArrow-button" >Ver más</button>
        </div>

        <div class="upArrow-container" style="display: none;">
          <img src="./resources/ver-mas.svg" alt="" class="button-icon" />
          <button class="upArrow-button" >Ver menos</button>

        </div>
      </div>

    </section>

    <template class="card-template">
    <div class="card">
          <img src="" alt="" class="card-image" />
          <h3 class="card-title"></h3>
          <p class="card-text">
  
          </p>

        </div></template>
`;

  el.appendChild(servicesComponentEl);

  // se selecciona la plantilla y el contenedor donde se pondrá la plantilla

  const cardTemplate = servicesComponentEl.querySelector(".card-template");
  const cardsContainer = servicesComponentEl.querySelector(".services__cards");
  const cardsContainerExtra = servicesComponentEl.querySelector(
    ".services__cards-extra"
  );
  const downArrowButton =
    servicesComponentEl.querySelector(".downArrow-button"); // se nombra boton ver más
  const upArrowButton = servicesComponentEl.querySelector(".upArrow-button"); // se nombra boton ver menos
  const downArrowContainer = servicesComponentEl.querySelector(
    ".downArrow-container"
  );
  const upArrowContainer =
    servicesComponentEl.querySelector(".upArrow-container");

  // se recorren los items de contentful hasta identificar el serviceSection y la pagina respectiva

  for (let item of contentfulData.items) {
    const contentModel = item.sys.contentType.sys.id;
    var cardsNumber = cardsContainer.querySelectorAll("div"); // contador de divs

    if (contentModel === "servicesSection" && item.fields.category === page) {
      // Cuando se cumplen los requisitos se clona el template
      const clone = document.importNode(cardTemplate.content, true);
      //se identifica la imagen el template y se guarda en una constante
      const templateImage = clone.querySelector(".card-image");

      // se recorren los Assets hasta encontrar la imagen con el id de la imagen del item

      for (let imagen of contentfulData.includes.Asset) {
        if (item.fields.serviceImage.sys.id === imagen.sys.id) {
          templateImage.setAttribute("src", imagen.fields.file.url); // Asignamos la imagen
        }
      }

      // se agrega el titulo y el texto del item encontrado en la copia del template creado
      clone.querySelector(".card-title").textContent = item.fields.serviceTitle;
      clone.querySelector(".card-text").textContent = item.fields.serviceText;

      if (cardsNumber.length <= 2) {
        cardsContainer.appendChild(clone);
      } else if (
        cardsNumber.length > 2 &&
        (page === "services" || page === "portfolio-test")
      ) {
        cardsContainerExtra.appendChild(clone);
        downArrowContainer.style.display = "flex";
      }
    }
  }

  // Configuración botón ver más

  downArrowButton.addEventListener("click", () => {
    downArrowContainer.style.display = "none";
    upArrowContainer.style.display = "flex";
    cardsContainerExtra.style.display = "grid";
  });

  // Configuración botón ver menos

  upArrowButton.addEventListener("click", () => {
    downArrowContainer.style.display = "flex";
    upArrowContainer.style.display = "none";
    cardsContainerExtra.style.display = "none";
  });
}
