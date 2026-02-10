import { UrlSet } from '../types'
import { generateRandomString } from '../utils'

export let urlSet: UrlSet = {}

export const findSlugByOriginalUrl = (originalUrl: string) => {
  for (const [slug, url] of Object.entries(urlSet)) {
    if (url === originalUrl) {
      return slug
    }
  }
  return null
}

export const generateSlugAndStoreUrlSet = (originalUrl: string) => {
  const existingSlug = findSlugByOriginalUrl(originalUrl)
  if (existingSlug) {
    return existingSlug
  }

  const randomString = generateRandomString().substring(0, 5)

  urlSet[randomString] = originalUrl

  return randomString
}

export const getOriginalUrl = (shortenedUrl: string) => {
  if (shortenedUrl in urlSet === false) {
    return { success: false, error: 'invalid url' }
  }

  const originalUrl = urlSet[shortenedUrl]
  return { success: true, originalUrl }
}
