import {Api} from "./api.js"
import {isValid} from "./utils.js";
import {getPrecipitationAndIcon} from "./utils.js";
import "./style.css";

const form = document.getElementById('form');
const input_latitude = form.querySelector('#latitude');
const input_longitude = form.querySelector('#longitude');
const submitBtn = form.querySelector('#submit');
const answer = document.querySelector(".temperature");
const map = document.getElementById('map');
const precipitation = document.querySelector('.precipitation')
const icon = document.querySelector(".icon")

form.addEventListener('submit', submitFormHandler);

async function submitFormHandler(event) {
  event.preventDefault();
  submitBtn.disabled = true;
  if (isValid(input_latitude.value) && isValid(input_longitude.value)) {
    Api.getWeather(input_latitude.value, input_longitude.value)
      .then((data) => {
        answer.textContent = `${Math.round(data.main.temp - 273.15)}°C`
        const precipitationAndIcon = getPrecipitationAndIcon(data.weather[0].description);
        console.log(data.weather[0].description)
        precipitation.textContent = precipitationAndIcon.precipitation;
        icon.setAttribute('src', `${precipitationAndIcon.linkToImg}`)
      })
      .then(() => {
        input_latitude.value = '';
        input_longitude.value = '';
        submitBtn.disabled = false;
      })
    await getMap()
  }

  else {
    answer.textContent = `Введены неверные параметры!!!`;

    input_latitude.value = '';
    input_longitude.value = '';
    submitBtn.disabled = false;
  }
}

function getMap(){
  map.innerHTML = '';
  ymaps.ready(init);
  function init(){
    const myMap = new ymaps.Map("map", {
      center: [input_latitude.value, input_longitude.value],
      zoom: 10
    });
    const myPlacemark = new ymaps.Placemark([input_latitude.value, input_longitude.value], {
      content: 'название маркера',
      balloonContent: 'Выбранное место',
    });

    // добавление маркера на карту
    myMap.geoObjects.add(myPlacemark);
  }
}