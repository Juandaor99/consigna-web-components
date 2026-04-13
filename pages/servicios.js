function getDataContentful() {
  return fetch(
    "https://cdn.contentful.com/spaces/6wzdx8p1fwrp/environments/master/entries?access_token=owlaUUndPnHD3TjrQNjCk4uV25FVUSmQEdD_FQ4re2I"
  ).then((response) => {
    return response.json().then((data) => {
      return data;
    });
  });
}

function main() {
  getDataContentful().then((contentfulData) => {
    menuComponent(document.querySelector(".header-section"), contentfulData);
    welcomeComponent(
      document.querySelector(".welcome-section"),
      contentfulData,
      "services"
    );
    servicesComponent(
      document.querySelector(".services-section"),
      contentfulData,
      "services"
    );
    footerComponent(document.querySelector(".footer-section"), contentfulData);
  });
}

main();
