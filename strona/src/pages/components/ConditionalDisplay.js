import React from 'react'

export default function ConditionalDisplay({ isVisible, text }) {
  return (
    <>
      <p>{isVisible ? text : 'Brak danych.'}</p>
    </>
  )
}
