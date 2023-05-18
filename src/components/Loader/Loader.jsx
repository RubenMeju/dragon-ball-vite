import './loader.css'

export default function Loader() {
  const circles = []
  for (let i = 1; i < 21; i++) {
    const styles = { '--i': i }
    circles.push(<span key={i} style={styles}></span>)
  }
  return (
    <section>
      <div className='loader'>{circles}</div>
    </section>
  )
}
