import {sequence} from "./utils.js";
import {Api} from "./api.js"
import {isValid} from "./utils.js";
import {getPrecipitationAndIcon} from "./utils.js";
import "./style.css";

const cloneBtn = document.getElementById('cloneBtn');
const firstBlock = document.querySelector('.block1')

cloneBtn.addEventListener('click', cloneBlock);
const generator = sequence();

function cloneBlock(event) {
  event.preventDefault();
  const container = document.querySelector('.container');
  const block = container.querySelector('.block1');
  const cloneBlock = block.cloneNode(true);
  const number = generator();
  cloneBlock.querySelector('#map').id = `map${number}`
  container.insertBefore(cloneBlock, cloneBtn);
  BlockOperation(cloneBlock, number);
}

BlockOperation(firstBlock);

function BlockOperation(block, number ='') {

  const form = block.querySelector('#form');
  const input_latitude = form.querySelector('#latitude');
  const input_longitude = form.querySelector('#longitude');

  const submitBtn = form.querySelector('#submit');
  const answer = block.querySelector(".temperature");
  const map = block.querySelector(`#map${number}`);
  const precipitation = block.querySelector('.precipitation')
  const icon = block.querySelector(".icon")

  form.addEventListener('submit', submitFormHandler);

  async function submitFormHandler(event) {
    event.preventDefault();
    submitBtn.disabled = true;
    if (isValid(input_latitude.value, 'latitude') && isValid(input_longitude.value, 'longitude')) {
      Api.getWeather(input_latitude.value, input_longitude.value)
          .then((data) => {
            answer.textContent = `${data.current.temp_c}°C`
            const precipitationAndIcon = getPrecipitationAndIcon(data.current.condition.text);
            precipitation.textContent = precipitationAndIcon.precipitation;
            icon.setAttribute('src', `${precipitationAndIcon.linkToImg}`)
          })
          .then(() => {
            input_latitude.value = '';
            input_longitude.value = '';
            submitBtn.disabled = false;
          })
      await getMap(number)
    }

    else {
      answer.textContent = `Введены неверные параметры!!!`;

      input_latitude.value = '';
      input_longitude.value = '';
      submitBtn.disabled = false;
    }
  }

  function getMap(number){
    if (map) {
      map.innerHTML = '';
    }
    ymaps.ready(init);
    function init(){
      const myMap = new ymaps.Map(`map${number}`, {
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
}



