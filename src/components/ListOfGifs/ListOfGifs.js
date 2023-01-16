import { useEffect, useState } from 'react'
import Gift from '../Gif/Gif'
import { getGifs } from '../../services/gif.service'

const ListOfGifs = ({ params }) => {
  const { keyword } = params
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs)
      setLoading(false)
    })
  }, [keyword])

  if (loading) {
    return <i>Loading... 🌀🌀🌀</i>
  }

  return (
    <>
      {gifs.map(({ id, title, url }) => (
        <Gift key={id} id={id} title={title} url={url} />
      ))}
    </>
  )
}

export default ListOfGifs
