export function isValid(value){
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

