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
    contactComponent(
      document.querySelector(".contact-section"),
      contentfulData
    );
    footerComponent(document.querySelector(".footer-section"), contentfulData);
  });
}

main();
