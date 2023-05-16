const BASE_URL = 'http://127.0.0.1:8000/api/character/'

export const fetchCharacters = async () => {
  return await fetch(BASE_URL).then(function (character) {
    return character.json()
  })
}
