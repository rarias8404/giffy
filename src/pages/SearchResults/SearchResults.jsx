import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import Loader from '../../components/Loader/Loader'
import useGifs from '../../hooks/useGifs'

const SearchResults = ({ params }) => {
  const { keyword } = params
  const { loading, gifs } = useGifs({ keyword })

  return <>{loading ? <Loader /> : <ListOfGifs gifs={gifs} />}</>
}

export default SearchResults
