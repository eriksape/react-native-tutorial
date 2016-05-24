const getImageSource = (movie: Object, kind: ?string): {uri: ?string} => {
  let uri = movie && movie.posters ? movie.posters.thumbnail : null
  if (uri && kind) {
    uri = uri.replace('tmb', kind)
  }
  return { uri }
}

export default getImageSource
