import Link from 'next/link'
import ItemList from './components/ItemList'
import TextBlock from './components/TextBlock'
import Footer from './Footer'
import ImageWithText from './components/ImageWithText'
import SimpleForm from './components/SimpleForm'
import ConditionalDisplay from './components/ConditionalDisplay'
import ListWithObjects from './components/ListWithObjects'
import LinksMenu from './components/LinksMenu'

export default function Home() {
  const ulubioneFilmy = ['Harry Potter', 'Piraci z Karaibow', 'Minionki', 'Ninjago']
  return (
    <>
      <h1>Strona główna</h1>

      <LinksMenu />

      <ItemList items={ulubioneFilmy} />
      <TextBlock heading={'Witaj!'} content={'To strona glowna naaszej firmy.'} />

      <ImageWithText imageUrl={'./gory.jpg'} text={'Poznaj nasza firme'} />

      <SimpleForm label={'Wprowadz'} placeholder={'imie'} />

      <div style={{ border: '1px solid white', margin: '30px' }}>
        <ConditionalDisplay isVisible={true} text={'Witamy'} />
      </div>

      <div style={{ border: '1px solid white', margin: '30px' }}>
        <ListWithObjects
          objectList={[
            { id: 1, name: 'antek', value: 18 },
            { id: 2, name: 'monika', value: 28 },
            { id: 3, name: 'dawid', value: 12 },
          ]}
        />
      </div>
      <Footer />
    </>
  )
}
