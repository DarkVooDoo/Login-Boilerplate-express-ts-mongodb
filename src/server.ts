import express from 'express'
const App = express()
const PORT  =  8080

import ClientRoute from './Routes/ClientRoute'

App.use(express.json())
App.use('/Client', ClientRoute)

App.listen(PORT, ()=>{
    console.log(`Server Running on PORT ${PORT}`)
})