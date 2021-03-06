require('./config/config');

const { request } = require('express')
const express = require('express')
const mongoose = require('mongoose');

const app = express()
const bodyParser = require('body-parser')




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

//configuracion global de rutas

app.use( require('./routes/index') );
 

 
app.listen(process.env.PORT, ()=>{
    console.log('Escuchado puerto', process.env.PORT)
});

mongoose.connect( process.env.URLDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true ,
  useCreateIndex:true
}, (err, resp)=>{
    
    if(err){
        throw err;
    }

    console.log('connect!!')

});