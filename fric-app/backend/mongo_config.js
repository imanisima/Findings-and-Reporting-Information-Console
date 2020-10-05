/**
 * 
 */

const username = "fricapp";
const password = "fricitup";
const dbname = "fric_db";
const MONGO_URI = `mongodb+srv://${username}:${password}@fric-cluster.ukxrw.mongodb.net/${dbname}?retryWrites=true&w=majority`;

module.exports = MONGO_URI;