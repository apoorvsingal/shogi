const next = require('next')
const express = require('express')

const env :boolean = (<string>(process.env.build)).trim() === 'development'
const PORT :number = Number(<string>process.env.PORT) || 3000

const app = next({dev: env})

const server = express()

app.prepare().then(()=>{
	server.use(app.getRequestHandler())
	server.listen(PORT, ()=>{
		console.log(`Server listening on port ${PORT}`)
	})
})