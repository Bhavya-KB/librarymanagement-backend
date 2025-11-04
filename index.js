//HOSTING

//1. import json server

const JsonServer = require ('json-server')

//2. create server for running josn file

const rBuilder =  JsonServer.create() //it returns an express

//3. create middleware

const middleware = JsonServer.defaults() //middleware  it helps to convert to json format code into javascript understanding languages

// 6. import db.json file

const router = JsonServer.router("db.json")

// 4. define port to run the server

const PORT = 3000 || process.env.PORT

// 5. use middleware

rBuilder.use(middleware)

// 7. use router

rBuilder.use(router)

// 8. tell the server to listen for client request

rBuilder.listen(PORT,()=>{
    console.log(`Resume builder started at PORT number ${PORT}`);
    
})

