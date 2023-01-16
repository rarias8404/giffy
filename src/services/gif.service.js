const apiKey = 'bgNVsQNUHbdI9e7PRpmkxfDnR7UUUxgb'

export const getGifs = async ({ keyword = 'morty' } = {}) => {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
  const res = await fetch(apiUrl)
  const response = await res.json()
  const { data } = response
  return data.map((gif) => {
    const { id, title, images } = gif
    return {
      id,
      title,
      url: images.downsized_medium.url,
    }
  })
}
