const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null =
  document.querySelector("#input-localizacao");
const sectionTempoInfo = document.querySelector("tempo-info");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!input) return;

  const localization = input.value;

  if (localization.length < 3) {
    alert("O local precisa ter, pelo menos, 3 letras");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${localization}&appid=d434620ca1717b66a2f90dc08801cec2&lang=pt_br&units=metric`
    );

    const datas = await response.json();
    console.log(datas);

    const infos = {
      temperatura: Math.round(datas.main.temp),
      local: datas.name,
      icone: `https://api.openweathermap.org/img/wn/${datas.weather[0].icon}@2x.png`,
    };
  } catch (error) {
    console.log("Deu um erro na obtenção da API", error);
  }
});
