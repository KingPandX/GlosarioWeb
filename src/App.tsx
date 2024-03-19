import './App.css'
import TermList from './components/TermList'
import { useState } from 'react'

function App() {

  const letters = ['*',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  const [letter, setLetter] = useState(0)

  const handleLetter = (e: any) => {
    setLetter(parseInt(e.target.id))
  }

  return (
    <>
    <div className='container'>
      <h1 className='title'>Glosario de terminos</h1>
        <div className='LetterContainer'>
          {
          letters.map((letter, index) => {
            return (
              <a href={`#${letter}`} onClick={handleLetter} id={index.toString()} className='letter'>
              {letter}
              </a>
            )
          })}
        </div>
        <TermList letter={letter}/>
    </div>
    <footer>
      <p className='foTitle'>Integrantes:</p>
      <p>Sergio Ricaflor CI: 30162461</p>
      <p>Leonardo Garcia CI: 30799528</p>
      <p>Jesus Borges CI: 30541139</p>
      <p>Bryan Pineda CI: 30255871</p>
    </footer>
    </>
  )
}

export default App
