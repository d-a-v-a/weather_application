export class Api {
  static getWeather(latitude, longitude) {
    return fetch(`https://api.weatherapi.com/v1/current.json?key=516e2e85c06c49d4aa9133828231402&q=${latitude},${longitude}&aqi=no`)
        .then((resp) => resp.json())
        //.then(resp => console.log(resp))
  }
}