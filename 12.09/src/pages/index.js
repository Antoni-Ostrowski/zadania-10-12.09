import Link from 'next/link'
import ItemList from './components/ItemList'
import TextBlock from './components/TextBlock'
import Footer from './Footer'
import ImageWithText from './components/ImageWithText'

export default function Home() {
  const ulubioneFilmy = ['Harry Potter', 'Piraci z Karaibow', 'Minionki', 'Ninjago']
  return (
    <>
      <h1>Strona główna</h1>
      <div style={{ margin: '20px' }}>
        <Link href='/about'>Przejdź do strony "O nas"</Link>
      </div>
      <div style={{ margin: '20px' }}>
        <Link href='/contact'>Skontaktuj sie z nami</Link>
      </div>

      <ItemList items={ulubioneFilmy} />
      <TextBlock heading={'Witaj!'} content={'To strona glowna naaszej firmy.'} />

      <ImageWithText imageUrl={'./gory.jpg'} text={'Poznaj nasza firme'} />
      <Footer />
    </>
  )
}
