import Link from 'next/link'
import React from 'react'

export default function menu() {
  return (
    <div>
      <div style={{ margin: '20px' }}>
        <Link href='/'>Przejdź do strony glownej</Link>
      </div>
      <div style={{ margin: '20px' }}>
        <Link href='/about'>Przejdź do strony "O nas"</Link>
      </div>
      <div style={{ margin: '20px' }}>
        <Link href='/contact'>Skontaktuj sie z nami</Link>
      </div>
      <div style={{ margin: '20px' }}>
        <Link href='/produkty'>Produkty</Link>
      </div>
    </div>
  )
}
