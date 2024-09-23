import React from 'react'
import ImageWithText from './components/ImageWithText'
import Link from 'next/link'
import Footer from './Footer.jsx'
import SimpleForm from './components/SimpleForm'
import LinksMenu from './components/LinksMenu'

export default function contact() {
  return (
    <>
      <h1>Kontakt</h1>
      <LinksMenu />

      <ImageWithText imageUrl={'./gory2.jpg'} text={'Skontaktuj sie z nami: 555 333 111'} />

      <SimpleForm label={'Zasubskrybuj newsletter!'} placeholder={'email'} />
      <Footer />
    </>
  )
}
