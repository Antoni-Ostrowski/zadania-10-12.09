import { useState } from 'react'
export default function SimpleForm({ label, placeholder }) {
  const [inputValue, setInputValue] = useState('')
  const [text, setText] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Wprowadzono:', inputValue)
    setText(inputValue)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>{label}</label>

        <input
          type='text'
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button type='submit'>Wyślij</button>
      </form>

      <p>Wprowadzono: {text}</p>
    </>
  )
}
