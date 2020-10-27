/**
 * 
 */

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const { MONGO_URI, SERVER_PORT } = require('../config/server_config');

const app = express();
const port = SERVER_PORT || 5000;

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());

/* The following section connects to the MongoDB database. */
mongoose
	.connect(MONGO_URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true
	})
	.then(res => console.log(res))
	.catch(err => {
		console.log(err);
		console.log("MongoDB connection failed, terminating server")
		process.exit(); // Terminate program
	});

const conn = mongoose.connection;
conn.once('open', () => {
	console.log("MongoDB connection established");
	console.log(MONGO_URI);
});

/* The following section initializes routers to the server pages. */
const indexRouter = require('./routes/index.js');
const systemsRouter = require('./routes/systems');
const eventsRouter = require('./routes/events');
const analystsRouter = require('./routes/analysts');
const tasksRouter = require('./routes/tasks');
const subtasksRouter = require('./routes/subtasks');
const configRouter = require('./routes/configure');
// const transactionsRouter = require('./routes/transactions');
// const findingsRouter = require('./routes/findings');
// const reportsRouter = require('./routes/reports');

/* Bind the routers to the server */
app.use('/', indexRouter);
app.use('/systems', systemsRouter);
app.use('/events', eventsRouter);
app.use('/analysts', analystsRouter);
app.use('/tasks', tasksRouter);
app.use('/subtasks', subtasksRouter);
app.use('/configure', configRouter);
// app.use('/transactions', transactionsRouter);
// app.use('/findings', findingsRouter);
// app.use('/reports', reportsRouter);

/* The following section lets the server start and listen to requests on the specified port. */
app.listen(port, () =>  console.log(`Backend server is running on port ${port}...`));
