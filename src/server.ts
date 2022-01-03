import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.use(express.json())

app.get('/', (request, response) => {
   return  response.json({ok: 'Deu certo'})
})


app.listen(process.env.PORT || 3433)

