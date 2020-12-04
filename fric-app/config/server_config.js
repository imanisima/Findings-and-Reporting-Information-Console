/**
 * 
 */

exports.SERVER_HOST = 'localhost';
exports.SERVER_PORT = 5000;

 /* */
const db_host = "localhost";
const db_port = 27017;
const db_name = "fric_db";
const db_user = "fricapp";
const db_pass = "fricitup";

exports.MONGO_URI = `mongodb+srv://${db_user}:${db_pass}@fric-cluster.ukxrw.mongodb.net/${db_name}?retryWrites=true&w=majority`;// Put this back
//exports.MONGO_URI = `mongodb://${db_user}:${db_pass}@${db_host}:${db_port}/${db_name}`; //COmmented this out

