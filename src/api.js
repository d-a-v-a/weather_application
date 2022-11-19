export class Api {
  static getWeather(latitude, longitude) {
    return fetch(`https://api.weatherapi.com/v1/current.json?key=1b334a35c7ca44a693490041221911&q=${latitude},${longitude}&aqi=no`)
        .then((resp) => resp.json())
  }
}