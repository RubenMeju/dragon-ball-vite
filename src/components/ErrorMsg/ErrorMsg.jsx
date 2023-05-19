import React from 'react'

export default function ErrorMsg({ error }) {
  return (
    <div>
      <h1>Error: {error}</h1>
      <button onClick={() => window.location.reload()}>
        Recargar la página
      </button>
    </div>
  )
}
