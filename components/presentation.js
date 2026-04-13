function presentationComponent(el, contentfulData) {
  const presentationComponentEl = document.createElement("div");
  presentationComponentEl.innerHTML = ` 
  <section class="presentation">
      <div class="presentation__container">
        <div class="presentation__container-content">
          <h2 class="presentation__container-title"></h2>
          <p class="presentation__container-text">
          </p>
        </div>

        <img
          src=""
          alt=""
          class="presentation__container-image"
        />
      </div>
    </section>
`;

  el.appendChild(presentationComponentEl);

  const item = contentfulData.items.find(
    (item) => item.sys.id === "XNvuh1q2Dt0CqL24RtBBp"
  );

  for (let image of contentfulData.includes.Asset) {
    if (item.fields.presentationPhoto.sys.id === image.sys.id) {
      el.querySelector(".presentation__container-image").src =
        image.fields.file.url;
    }
  }

  el.querySelector(".presentation__container-title").textContent =
    item.fields.presentationTitle;
  el.querySelector(".presentation__container-text").textContent =
    item.fields.presentationContent;
}
