import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { UserRoutes } from './app/modules/user/user.route'


const app: Application = express()


//parser:
app.use(express.json())
app.use(cors())

//application routes:
app.use('/api/users', UserRoutes)