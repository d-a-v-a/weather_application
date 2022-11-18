export class Api {
  static getWeather(latitude, longitude){
    return  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9e69d77eff5cc385c1539d3978d3d98f`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      return data;
    })
  }
}