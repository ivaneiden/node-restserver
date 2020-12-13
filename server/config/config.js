//====================
//      Puerto
//===============0===
process.env.PORT = process.env.PORT || 3000;


//====================
//      Entorno
//===============0===

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//====================
//      vencimiento del token
//===============0===
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//====================
//      Seed
//===============0===

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

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


