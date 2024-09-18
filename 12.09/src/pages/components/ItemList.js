import React, { useEffect } from 'react'

export default function ItemList({ items }) {
  //   console.log(items)

  return (
    <ul style={{ border: '2px solid white', color: 'white', padding: '20px' }}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
