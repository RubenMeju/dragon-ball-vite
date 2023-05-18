// http://127.0.0.1:8000/api/character/?offset=2&search=vegeta
const BASE_URL = 'http://127.0.0.1:8000/api/character/?limit=10&offset='

export const fetchCharacters = async (offset, search) => {
  console.log('url ', BASE_URL + offset)
  return await fetch(BASE_URL + '&offset=' + offset + '&search=' + search).then(
    function (character) {
      return character.json()
    }
  )
}
