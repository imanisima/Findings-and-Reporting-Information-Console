/**
 * 
 */

const host = "localhost";
const port = 27017;
const db_name = "fric_db";
const db_user = "fricapp";
const db_pass = "fricitup";
// const MONGO_URI = `mongodb+srv://${db_user}:${db_pass}@fric-cluster.ukxrw.mongodb.net/${db_name}?retryWrites=true&w=majority`;
const MONGO_URI = `mongodb://${db_user}:${db_pass}@${host}:${port}/${db_name}`

module.exports = MONGO_URI;
