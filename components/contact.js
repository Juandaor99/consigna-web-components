function contactComponent(el, contentfulData) {
  const contactComponentEl = document.createElement("div");
  contactComponentEl.innerHTML = ` 
    <section class="contact">
      <div class="contact__container">
        <h2 class="contact__title">Escríbeme</h2>
        <form class="contact__form">
          <div class="contact__form-field form-field-1">
            <label class="form-label">Nombre</label>
            <input class="form-input" type="text" placeholder="Tu nombre" />
          </div>
          <div class="contact__form-field form-field-2">
            <label class="form-label">Email</label>
            <input class="form-input" type="email" placeholder="tu@email.com" />
          </div>
          <div class="contact__form-field form-field-3">
            <label class="form-label">Email</label>
            <textarea class="form-textarea"></textarea>
          </div>
          <button class="contact__form-button">
            Enviar
            <img
              class="form-button-icon"
              src="./resources/send-icon.svg"
              alt=""
            />
          </button>
        </form>
      </div>
    </section>
`;

  el.appendChild(contactComponentEl);

  const form = contactComponentEl.querySelector(".contact__form");
  const inputName = contactComponentEl.querySelector(".form-field-1 input"); // busca el elemento <input> que está dentro del div con clase .form-field-1.
  const inputEmail = contactComponentEl.querySelector(".form-field-2 input"); // busca el elemento <input> que está dentro del div con clase .form-field-2.
  const textareaMessage = contactComponentEl.querySelector(
    ".form-field-3 textarea"
  );

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // evitar que recargue la página

    const name = inputName.value.trim();
    const email = inputEmail.value.trim();
    const message = textareaMessage.value.trim();

    if (!name || !email || !message) {
      alert("Por favor completa todos los campos");
      return;
    }

    const fullMessage = `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`;

    console.log(fullMessage);

    fetch("https://apx.school/api/utils/email-to-student", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "juanda.nomad@gmail.com", // poné tu email acá
        message: fullMessage,
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert("Mensaje enviado con éxito!");
          form.reset();
        } else {
          alert("Error al enviar el mensaje");
        }
      })
      .catch(() => {
        alert("Error al enviar el mensaje");
      });
  });
}
