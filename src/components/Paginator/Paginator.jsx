import './paginator.css'

export default function Paginator({ handlePreview, handleNext }) {
  return (
    <div className='paginator'>
      <div className='buttons'>
        <button type='button' onClick={handlePreview}>
          Preview
        </button>

        <button type='button' onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  )
}
