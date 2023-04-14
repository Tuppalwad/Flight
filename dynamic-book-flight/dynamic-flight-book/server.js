const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const typeDefs = require('./typedefs')
const resolvers = require('./Resolvers')
const mongoose = require('mongoose')


async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    });

    await apolloServer.start()

    apolloServer.applyMiddleware({app: app}) //jslint-ignore-line


    app.use((req,res) => {
        res.send("Hello from apollo server")
    })

    

   /* mongoose.connect('mongodb+srv://admin:admin@cluster0.u46pf.mongodb.net/?retryWrites=true&w=majority', 
    { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });

    console.log('mongoose connected...')*/
    

    app.listen(3000, () => console.log("server is running on 3000"))
}
startServer();