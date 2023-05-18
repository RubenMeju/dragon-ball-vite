import './searchInput.css'

export default function SearchInput({ handleSearch }) {
  return (
    <form>
      <input
        type='text'
        name='search'
        placeholder='Songoku, Vegeta ...'
        onChange={handleSearch}
      />
    </form>
  )
}
