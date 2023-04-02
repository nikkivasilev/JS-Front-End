window.addEventListener(`load`, attachEvents)

function attachEvents() {
  const BASE_URL = `http://localhost:3030/jsonstore/forecaster/`;
  const cityInput = document.getElementById(`location`);
  const submitBtn = document.getElementById(`submit`);
  const forecastContainer = document.getElementById(`forecast`);
  const currentContainer = document.getElementById(`current`);
  const upcomingContainer = document.getElementById(`upcoming`);
  submitBtn.addEventListener(`click`, submitBtnHandler);

  function submitBtnHandler() {
      let cityCode = cityInput.value.toLowerCase();
      if (cityCode === `new york`) {
        cityCode = `ny`;
      }
      forecastContainer.style.display = `block`;
      fetch(BASE_URL)
      .then((res) => res = res.json())
      .then((allForecast) => {
      let todayForecastData = allForecast.today[cityCode];
      let name = todayForecastData.name;
      let todayForecast = todayForecastData.forecast;
      let conditionSymbol = getConditionSymbol(todayForecast.condition);
      let todayForecastTemp = `${todayForecast.low}°/${todayForecast.high}°`;
      const innerForecastDiv = createElement(`div`, ``, currentContainer, ``, ["forecasts",]);
      const forecastSymbol = createElement(`span`, ``, innerForecastDiv, ``, [`condition`,`symbol`,]);
      forecastSymbol.innerHTML = conditionSymbol;
      const conditionContainer = createElement(`span`,"",innerForecastDiv,``,[`condition`]);
      createElement(`span`, name, conditionContainer, ``, [`forecast-data`]);
      createElement(`span`, todayForecastTemp, conditionContainer, ``, [`forecast-data`,]);
      createElement(`span`, todayForecast.condition, conditionContainer, ``, [`forecast-data`,]);


      let threeDayCityWhether = Array.from(allForecast.upcoming[cityCode].forecast);
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

      }).catch((err) => {
        forecastContainer.innerHTML = `Error`
      })

  }
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
  
}




