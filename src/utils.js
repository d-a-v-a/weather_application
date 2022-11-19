export function isValid(value, type) {

  const array = value.split('')
  const validCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
  const validCharactersForFirstChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '-']

  if (!(validCharactersForFirstChar.includes(array[0]))) {
    return false;
  }

  for (let i = 1; i < array.length; i++) {
    if (!(validCharacters.includes(array[i]))) {
      return false;
    }
  }
  const valueNum = +value

  if (type === 'latitude' && (valueNum > 85 || valueNum < -85)) {
    return false;
  }

  if (type === 'longitude' && (valueNum > 180 || valueNum < -180)) {
    return false;
  }

  return (type === 'latitude' || type === 'longitude');
}

export function getPrecipitationAndIcon(precipitation) {
  let map = new Map;
  switch (precipitation) {
    case "Sunny":
      map.precipitation = 'Ясно';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/869/869767.png'
      break;
    case "Partly cloudy":
      map.precipitation = 'Переменная облачность';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/1163/1163763.png'
      break;
    case "Cloudy":
      map.precipitation = 'Облачно';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/1163/1163726.png'
      break;
    case "broken clouds":
      map.precipitation = 'Пасмурнно';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/8691/8691244.png'
      break;
    case "Rain shower":
      map.precipitation = 'Сильный дождь';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/1146/1146797.png'
      break;
    case "Light rain shower":
      map.precipitation = 'Дождь';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/4089/4089252.png'
      break;
    case "Patchy rain possible":
      map.precipitation = 'Дождь';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/4089/4089252.png'
      break;
    case "Thundery outbreaks possible":
      map.precipitation = 'Гроза';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/1146/1146799.png'
      break;
    case "Blizzard":
      map.precipitation = 'Снег';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/2315/2315377.png'
      break;
    case "Blowing snow":
      map.precipitation = 'Легкий снег';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/2315/2315377.png'
      break;
    case "Mist":
      map.precipitation = 'Туман';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/2675/2675962.png'
      break;
    case "Fog":
      map.precipitation = 'Туман';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/2675/2675962.png'
      break;
    case "Overcast":
      map.precipitation = 'Пасмурнно';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/8691/8691244.png'
      break;
    default:
      map.precipitation = 'Переменная облачность';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/1163/1163763.png'
  }
  return map;
}

export function sequence() {
  let callNumber = 0;
  return function () {
    return ++callNumber;
  }
}