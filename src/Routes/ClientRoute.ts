import express from 'express'
const Route = express()
import {SignIn, SignUp, UpdateClient} from '../Model/Client'

Route.post('/', async (req, res)=>{
    const result = await SignIn(req.body)
    res.send(result)
})

Route.post('/SignUp', async (req, res)=>{
    const result = await SignUp(req.body)
    res.send(result)
})

Route.post('/Update', async (req, res)=>{
    const result = await UpdateClient(req.body)
    res.send(result)
})

export default Route