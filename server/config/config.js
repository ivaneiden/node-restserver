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

if( process.env.NODE_ENV === 'dev' ){

    urlDB = 'mongodb://localhost:27017/cafe';

} else {
    
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;


