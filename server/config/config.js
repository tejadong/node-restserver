// =============================
// Puerto
// =============================
process.env.PORT = process.env.PORT || 3000;


// =============================
// Entorno
// =============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =============================
// Vencimiento del Token
// =============================
process.env.CADUCIDAD_TOKEN = '48h';

// =============================
// SEED de autenticación
// =============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// =============================
// Base de datos
// =============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// =============================
// Google Client ID
// =============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '651675214340-9a22j28pu67st5h1tkma536827d9fo2d.apps.googleusercontent.com';