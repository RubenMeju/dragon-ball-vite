export default function SearchInput({ handleSearch }) {
  return (
    <form>
      <input type='text' name='search' onChange={handleSearch} />
      <button type='submit'>Buscar</button>
    </form>
  )
}
