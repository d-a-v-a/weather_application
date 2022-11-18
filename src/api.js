export class Api {
  static getWeather(latitude, longitude){
    return  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9e69d77eff5cc385c1539d3978d3d98f`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      return data;
    })
  }

  // static getMap(latitude, longitude){
  //   return fetch("https://api-maps.yandex.ru/2.1/?apikey=159985b2-7809-4064-87e3-f1839fb0a880")
  //   .then((ymaps) => {
  //     ymaps.ready(init);
  //     function init(){
  //       const myMap = new ymaps.Map("map", {
  //         center: [55.76, 37.64],
  //         zoom: 7
  //       });
  //     }
  //   })
  // }
}