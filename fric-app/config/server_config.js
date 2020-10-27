/**
 * 
 */

exports.SERVER_HOST = 'localhost';
exports.SERVER_PORT = 5000;

 /* */
const DB_HOST = "localhost";
const DB_PORT = 27017;
const DB_NAME = "fric_db";
const DB_USER = "fricapp";
const DB_PASS = "fricitup";

// exports.MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASS}@fric-cluster.ukxrw.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
exports.MONGO_URI = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
