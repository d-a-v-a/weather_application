export function isValid(value) {
  value = value.split('')
  let correct = true;
  const validCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
  const validCharactersForFirstChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '-']

  if (!(validCharactersForFirstChar.includes(value[0]))) {
    correct = false;
  }

  for (let i = 1; i < value.length; i++) {
    if (!(validCharacters.includes(value[i]))) {
      correct = false;
    }
  }
  return correct;
}

export function getPrecipitationAndIcon(precipitation) {
  let map = new Map;
  switch (precipitation) {
    case "clear sky":
      map.precipitation = 'Ясно';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/869/869767.png'
      break;
    case "few clouds":
      map.precipitation = 'Низкая облачность';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/1163/1163763.png'
      break;
    case "scattered clouds":
      map.precipitation = 'Облачно';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/1163/1163726.png'
      break;
    case "broken clouds":
      map.precipitation = 'Пасмурнно';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/8691/8691244.png'
      break;
    case "shower rain":
      map.precipitation = 'Сильный дождь';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/1146/1146797.png'
      break;
    case "rain":
      map.precipitation = 'Дождь';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/4089/4089252.png'
      break;
    case "thunderstorm":
      map.precipitation = 'Гроза';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/1146/1146799.png'
      break;
    case "snow":
      map.precipitation = 'Снег';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/2315/2315377.png'
      break;
    case "light snow":
      map.precipitation = 'Легкий снег';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/2315/2315377.png'
      break;
    case "mist":
      map.precipitation = 'Туман';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/2675/2675962.png'
      break;
    case "overcast clouds":
      map.precipitation = 'Пасмурнно';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/8691/8691244.png'
      break;
    default:
      map.precipitation = 'Ясно';
      map.linkToImg = 'https://cdn-icons-png.flaticon.com/512/869/869767.png'
  }
  return map;
}