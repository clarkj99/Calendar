const express = require('express');
const cors = require('cors')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const eventsRouter = require('./routes/events');

const app = express();

const port = 9000;
app.use(cors())
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/events', eventsRouter);

app.listen(port, () => console.log(`Calendar app listening at http://localhost:${port}`))

module.exports = app;
