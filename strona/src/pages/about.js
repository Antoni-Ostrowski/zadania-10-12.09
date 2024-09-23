import React from 'react'
import ItemList from './components/ItemList'
import Link from 'next/link'
import Footer from './Footer'
import ConditionalDisplay from './components/ConditionalDisplay'
import LinksMenu from './components/LinksMenu'

export default function about() {
  const hobby = ['Koszykowka', 'Pilka nozna', 'Programowanie']
  return (
    <>
      <h1>O nas</h1>
      <LinksMenu />

      <ItemList items={hobby} />

      <div style={{ border: '1px solid white', margin: '30px' }}>
        <ConditionalDisplay isVisible={false} text={'O nas.'} />
      </div>

      <Footer />
    </>
  )
}
