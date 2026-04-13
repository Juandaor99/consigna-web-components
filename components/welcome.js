function welcomeComponent(el, contentfulData, page) {
  const welcomeComponentEl = document.createElement("div");
  welcomeComponentEl.innerHTML = `<section class="welcome">
      <div class="welcome__content">
        <h1 class="welcome__content-text">
         
        </h1>
        <img
          src=""
          alt=""
          class="welcome__content-image"
        />
        <img
          class="welcome__content-image-shadow"
          src="./resources/cohete-shadow.svg"
          alt=""
        />
      </div>
    </section>`;

  el.appendChild(welcomeComponentEl);

  var greeting = "Hola";
  var name = "Visitante";
  var wImage = "";
  var sImage = "";

  const item = contentfulData.items.find(
    (item) =>
      item.sys.contentType.sys.id === "welcomeSection" &&
      item.fields.category === page,
  );

  if (item) {
    // Accedemos a los campos directamente
    greeting = item.fields.whiteTitle || greeting; // Si no hay saludo, usamos el por defecto
    name = item.fields.blueTitle || name; // Si no hay nombre, usamos el por defecto

    for (let image of contentfulData.includes.Asset) {
      if (item.fields.welcomeImage.sys.id === image.sys.id) {
        wImage = image.fields.file.url;
      }

      if (item.fields.imageShadow.sys.id === image.sys.id) {
        sImage = image.fields.file.url;
      }
    }
  } else {
    console.warn("Item no encontrado");
  }

  welcomeComponentEl.querySelector(".welcome__content-text").innerHTML =
    ` ${greeting} <br />
          <span class="text-different-color">${name}</span>`;

  welcomeComponentEl.querySelector(".welcome__content-image").src = wImage;
  welcomeComponentEl.querySelector(".welcome__content-image-shadow").src =
    sImage;
}
