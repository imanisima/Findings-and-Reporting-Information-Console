/**
 * 
 */

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/**
 * The following section links the mongodb atlas database.
 */

const MONGO_URI = require('./mongo_config');

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const conn = mongoose.connection;
conn.once('open', () => {
	console.log("MongoDB connection established");
});

/**
 * The following section routes request to the server pages.
 */

const indexRouter = require('./routes/index.js');
const systemsRouter = require('./routes/systems');
const eventsRouter = require('./routes/events');
const analystsRouter = require('./routes/analysts');
const tasksRouter = require('./routes/tasks');
const progressRouter = require('./routes/tasks');
// const subtasksRouter = require('./routes/subtasks');
// const transactionsRouter = require('./routes/transactions');
// const findingsRouter = require('./routes/findings');
// const reportsRouter = require('./routes/reports');

app.use('/', indexRouter);
app.use('/systems', systemsRouter);
app.use('/events', eventsRouter);
app.use('/analysts', analystsRouter);
app.use('/tasks', tasksRouter);
app.use('/progress',progressRouter)
// app.use('/subtasks', subtasksRouter);
// app.use('/transactions', transactionsRouter);
// app.use('/findings', findingsRouter);
// app.use('/reports', reportsRouter);

/**
 * The following section lets the server start and listen to requests on the specified port.
 */

app.listen(port, () => {
	console.log(`Backend server is running on port ${port}.`);
});