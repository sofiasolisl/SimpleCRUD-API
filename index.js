const express=require('express')
const app = express()
const mongoose=require('mongoose')
const productRoute=require('./routes/product.route.js')

//Midleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Routes
app.use('/api/products',productRoute)



mongoose.connect('mongodb+srv://sofis64:kEv92JE1sZwGYqbS@crudapi.feqoipe.mongodb.net/CrudApi?retryWrites=true&w=majority&appName=CRUDAPI')
.then(()=>{
    console.log('Connected to database!')
    app.listen(3000,()=>{
        console.log('Server running on port 3000')
    })})
.catch(()=>{
    console.log("Connection failed")
})



