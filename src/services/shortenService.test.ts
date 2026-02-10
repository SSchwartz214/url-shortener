import {
  generateSlugAndStoreUrlSet,
  getOriginalUrl,
  urlSet,
} from './shortenService'

describe('shortenService', () => {
  describe('generateSlugAndStoreUrlSet', () => {
    it('should return a random string with a length of 5', () => {
      const originalUrl = 'https://example.com'
      const slug = generateSlugAndStoreUrlSet(originalUrl)

      expect(slug).toHaveLength(5)
      expect(typeof slug).toBe('string')
      expect(urlSet[slug]).toBe(originalUrl)
    })
  })

  describe('findSlugByOriginalUrl', () => {
    it('should return the existing slug if the URL already exists', () => {
      const originalUrl = 'https://example.com'
      const firstSlug = generateSlugAndStoreUrlSet(originalUrl)
      const secondSlug = generateSlugAndStoreUrlSet(originalUrl)

      expect(firstSlug).toBe(secondSlug)
      expect(Object.keys(urlSet).length).toBe(1)
    })
  })

  describe('getOriginalUrl', () => {
    it('should return the original url when the slug exists', () => {
      const originalUrl = 'https://example.com'
      const slug = generateSlugAndStoreUrlSet(originalUrl)

      const result = getOriginalUrl(slug)

      expect(result.success).toBe(true)
      expect(result.originalUrl).toBe(originalUrl)
    })

    it('should return success false and error the slug does not exist', () => {
      const result = getOriginalUrl('does-not-exist')

      expect(result.success).toBe(false)
      expect(result.error).toBe('invalid url')
    })
  })
})
