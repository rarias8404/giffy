import Gift from '../../components/Gif/Gif'
import useGifs from '../../hooks/useGifs'

const Detail = ({ params }) => {
  const { gifs } = useGifs()

  const gif = gifs.find((singleGif) => singleGif.id === params?.id)

  return <Gift {...gif} />
}

export default Detail
