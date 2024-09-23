import Link from 'next/link'
import Footer from './Footer'
import ListWithObjects from './components/ListWithObjects'
import LinksMenu from './components/LinksMenu'

export default function produkty() {
  return (
    <>
      <h1>Strona główna</h1>
      <LinksMenu />
      <div style={{ border: '1px solid white', margin: '30px' }}>
        <ListWithObjects
          objectList={[
            { id: 1, name: 'jablko', value: 11 },
            { id: 2, name: 'gruszka', value: 55 },
            { id: 3, name: 'banan', value: 66 },
          ]}
        />
      </div>
      <Footer />
    </>
  )
}
