const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null =
  document.querySelector("#input-localizacao");
const sectionTempoInfo = document.querySelector("tempo-info");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
});
