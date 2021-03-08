import { Express } from 'express'

type Counter = {
  value: number
}

const initialCount = {value: 1}

export function counterRoutes(app: Express){
  app.get('/api/init', (req, res) => res.send(initialCount))

  app.post('/api/incrementdouble', (req, res) => {
    console.log(req.body)
    const newCounter = Object.assign({}, req.body)
    newCounter.value = newCounter.value + 2
    res.send(newCounter)
  })
}