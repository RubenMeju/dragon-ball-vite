import './paginator.css'

export default function Paginator({ next, offset, handlePreview, handleNext }) {
  return (
    <div className='paginator'>
      <div className='buttons'>
        <button
          type='button'
          onClick={handlePreview}
          disabled={offset <= 0 && true}
        >
          Preview
        </button>

        <button
          type='button'
          onClick={handleNext}
          disabled={next === null && true}
        >
          Next
        </button>
      </div>
    </div>
  )
}
