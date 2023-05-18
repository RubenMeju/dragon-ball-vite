import './paginator.css'

export default function Paginator({ handlePreview, handleNext }) {
  return (
    <div className='paginator'>
      <button onClick={handlePreview}>Preview</button>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}
