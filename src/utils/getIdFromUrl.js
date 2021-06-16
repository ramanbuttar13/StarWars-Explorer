
const getIdFromUrl = (url) => {
    return url.split('/')[url.split('/').length - 2]
  }

export default getIdFromUrl;