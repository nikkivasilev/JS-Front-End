function attachEvents() {
  const BASE_URL = `http://localhost:3030/jsonstore/forecaster/today/`;
  const threeDayBASE_URL = `http://localhost:3030/jsonstore/forecaster/upcoming/`;
  const cityInput = document.getElementById(`location`);
  const submitBtn = document.getElementById(`submit`);
  const forecastContainer = document.getElementById(`forecast`);
  const currentContainer = document.getElementById(`current`);
  const upcomingContainer = document.getElementById(`upcoming`);
  submitBtn.addEventListener(`click`, submitBtnHandler);

  async function submitBtnHandler() {
    try {
      let cityName = cityInput.value.toLowerCase();
      if (cityName === `new york`) {
        cityName = `ny`;
      }
      forecastContainer.style.display = `block`;
      const fetchRes = await fetch(BASE_URL);
      const cities = await fetchRes.json();
      let city = cities[cityName];
      let name = city.name;
      let forecast = city.forecast;
      let conditionSymbol = getConditionSymbol(forecast.condition);
      let forecastTemp = `${forecast.low}°/${forecast.high}°`;
      const innerForecastDiv = createElement(`div`, ``, currentContainer, ``, [
        "forecast",
      ]);
      const forecastSymbol = createElement(`span`, ``, innerForecastDiv, ``, [
        `condition`,
        `symbol`,
      ]);
      forecastSymbol.innerHTML = conditionSymbol;
      const conditionContainer = createElement(
        `span`,
        "",
        innerForecastDiv,
        ``,
        [`condition`]
      );
      createElement(`span`, name, conditionContainer, ``, [`forecast-data`]);
      createElement(`span`, forecastTemp, conditionContainer, ``, [
        `forecast-data`,
      ]);
      createElement(`span`, forecast.condition, conditionContainer, ``, [
        `forecast-data`,
      ]);

      const threeDayFetch = await fetch(threeDayBASE_URL);
      const threeDayCities = await threeDayFetch.json();
      let threeDayCityWhether = Array.from(threeDayCities[cityName].forecast);
      const forecastInfoContainer = createElement(`div`, ``, upcomingContainer, ``, [`forecast-info`]) 
      threeDayCityWhether.forEach((data) => {
        const {condition, high, low} = data
        const incomingSpan = createElement(`span`, ``, forecastInfoContainer, ``, [`upcoming`])
        let symbol = getConditionSymbol(condition);
        
        const forecastSymbol = createElement(`span`, ``, incomingSpan, ``, [`symbol`]);
        forecastSymbol.innerHTML = symbol
        let temp = `${low}°/${high}°`;
        createElement(`span`, temp, incomingSpan, ``, [`forecast-data`]);
        createElement(`span`, condition, incomingSpan, ``, [`forecast-data`]);
      })


    } catch {}
  }
}

attachEvents();

function getConditionSymbol(weather) {
  if (weather === `Sunny`) {
    return `&#x2600`;
  } else if (weather === `Partly sunny`) {
    return `&#x26C5`;
  } else if (weather === `Overcast`) {
    return `&#x2601`;
  } else if (weather === `Rain`) {
    return `&#x2614`;
  }
}

function createElement(type, content, parent, id, classes, attributes) {
  const htmlElement = document.createElement(type);

  if (content && type !== `input`) {
    htmlElement.textContent = content;
  }

  if (content && type === `input`) {
    htmlElement.value = content;
  }

  if (id) {
    htmlElement.id = id;
  }

  if (classes) {
    htmlElement.classList.add(...classes);
  }
  if (attributes) {
    for (const key in attributes) {
      htmlElement.setAttribute(key, attributes[key]);
    }
  }

  if (parent) {
    parent.appendChild(htmlElement);
  }

  return htmlElement;
}
