import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import useGifs from '../../hooks/useGifs'

const POPULAR_GIFS = ['Matrix', 'Programming', 'Uruguay', 'Colombia']

const Home = () => {
  const [keyword, setKeyword] = useState('')
  const [, pushLocation] = useLocation()
  const { gifs } = useGifs()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (evt) => {
    setKeyword(evt.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={keyword} onChange={handleChange} />
      </form>
      <h3 className="App-title">Últimas búsquedas</h3>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Gif populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gif de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home
