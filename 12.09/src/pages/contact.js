import React from 'react'
import ImageWithText from './components/ImageWithText'
import Link from 'next/link'
import Footer from './Footer.jsx'

export default function contact() {
  return (
    <>
      <h1>Kontakt</h1>
      <Link href='/'>Przejdź do strony glownej</Link>
      <ImageWithText imageUrl={'./gory2.jpg'} text={'Skontaktuj sie z nami: 555 333 111'} />
      <Footer />
    </>
  )
}
