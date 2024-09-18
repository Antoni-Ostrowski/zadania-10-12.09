import React from 'react'
import TextBlock from './components/TextBlock'

export default function footer() {
  return (
    <div style={{ position: 'absolute', bottom: '0px', border: '2px solid white', width: '100%', textAlign: 'center' }}>
      <TextBlock heading={'Zs1mmz'} content={'Szkola miesci sie w na ulicy budowlanej...'} />
    </div>
  )
}
