import React from 'react'
import ItemList from './components/ItemList'
import Link from 'next/link'
import Footer from './Footer'

export default function about() {
  const hobby = ['Koszykowka', 'Pilka nozna', 'Programowanie']
  return (
    <>
      <h1>O nas</h1>
      <Link href='/'>Przejdź do strony glownej</Link>
      <ItemList items={hobby} />
      <Footer />
    </>
  )
}
