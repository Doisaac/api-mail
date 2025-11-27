import express from 'express'

import { EXPRESS_PORT } from './config.js'
import appRouter from './routes/contacto.routes.js'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(appRouter)

app.listen(EXPRESS_PORT)
console.log(`El servidor está corriendo en el Puerto ${EXPRESS_PORT}`)
