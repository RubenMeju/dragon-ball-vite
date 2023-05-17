const BASE_URL = 'http://127.0.0.1:8000/api/character/?search='

export const fetchCharacters = async (search = '') => {
  return await fetch(BASE_URL + search).then(function (character) {
    return character.json()
  })
}
