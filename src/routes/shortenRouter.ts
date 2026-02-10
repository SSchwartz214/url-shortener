import { Router, Request, Response } from 'express'
import {
  generateSlugAndStoreUrlSet,
  getOriginalUrl,
} from '../services/shortenService'

const router = Router()

router.get('/:shortenedUrl', (req: Request, res: Response) => {
  const shortenedUrl = req.params.shortenedUrl as string
  const result = getOriginalUrl(shortenedUrl)

  if (!result.success) {
    return res.status(404).json(result.error)
  }

  res.status(308).redirect(result.originalUrl!)
})

router.post('/', (req: Request, res: Response) => {
  const { originalUrl } = req.body

  const isInvalid = typeof originalUrl !== 'string'

  if (isInvalid) {
    return res.status(400).json({ error: 'Invalid request' })
  }

  const slug = generateSlugAndStoreUrlSet(originalUrl)

  return res.status(201).json(slug)
})

export default router
