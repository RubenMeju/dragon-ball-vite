const BASE_URL = 'http://127.0.0.1:8000/api/character/?limit=9&offset='

export const fetchCharacters = async (offset, search) => {
  return await fetch(BASE_URL + '&offset=' + offset + '&search=' + search).then(
    function (character) {
      return character.json()
    }
  )
}
