import React from 'react'

export default function TextBlock({ heading, content }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{heading}</h2>
      <p>{content}</p>
    </div>
  )
}
