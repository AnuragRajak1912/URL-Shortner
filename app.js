const express = require('express');
const app = express();
const PORT = 80;
const path = require('path');
const mongoose = require('mongoose');
const router = require('./router/route')

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json())

const uri = "mongodb://127.0.0.1:27017/url";
mongoose.connect(uri, {
    
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});


app.use('/',router);

app.use('/url',router)

// app.get('/:shortID',(req,res)=>{
//     const shortID = req.params.shortID;
//     console.log(shortID);
//     res.redirect('/')
// })

app.listen(PORT,()=>{
    console.log(`app running on port : ${PORT}`)
})






// const {getuser} = require('./controller/url')
// app.use('/h',getuser)