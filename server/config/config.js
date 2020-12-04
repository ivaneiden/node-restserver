//====================
//      Puerto
//===============0===
process.env.PORT = process.env.PORT || 3000;


//====================
//      Entorno
//===============0===

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//====================
//   Base de datos
//===============0===

let urlDB

// if( process.env.NODE_ENV === 'dev' ){

//     urlDB = 'mongodb://localhost:27017/cafe';

// } else {
    
    urlDB = 'mongodb+srv://iserrano:umRbvScH58xADfD@cluster0.od4xm.mongodb.net/cafe';

//}

process.env.URLDB = urlDB;


