import next from 'next'
import express from 'express'
import morgan from 'morgan'

const env:boolean = (<string>(process.env.build)).trim() === 'development'
const PORT:number = Number(<string>process.env.PORT) || 3000

const app = next({dev: env})

const server = express()

app.prepare().then(()=>{
	server.use(morgan('dev'))
	server.use(app.getRequestHandler())
	server.listen(PORT, ()=>{
		console.log(`Server listening on port ${PORT}`)
	})
})