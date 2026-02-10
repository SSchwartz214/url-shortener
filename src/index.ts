import express, { Application, Request, response, Response } from 'express'

import shortenRouter from './routes/shortenRouter'

const app: Application = express()

app.use(express.json())

app.use('/shorten', shortenRouter)

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'UP' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
