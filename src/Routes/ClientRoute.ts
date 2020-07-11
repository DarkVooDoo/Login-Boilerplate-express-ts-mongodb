import express from 'express'
const Route = express()
import {SignIn, SignUp, UpdateClient} from '../Model/Client'

//Sign In Route
Route.post('/', async (req, res)=>{
    const result = await SignIn(req.body)
    res.send(result)
})

//Sign Up Route
Route.post('/SignUp', async (req, res)=>{
    const result = await SignUp(req.body)
    res.send(result)
})

//Update Route
Route.post('/Update', async (req, res)=>{
    const result = await UpdateClient(req.body)
    res.send(result)
})

export default Route