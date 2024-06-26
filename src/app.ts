import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { routes } from './core/routes'

const app = express()
const port = 3000
const exampleResponse = 'API running http://localhost:' + port

app.use(express.json())

app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  }),
)

app.get('/', (_req: Request, res: Response) => {
  res.send(exampleResponse)
})

app.use(routes)

app.listen(port, () => {
  console.log(exampleResponse)
})
