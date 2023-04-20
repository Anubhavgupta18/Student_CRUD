const express = require('express');
const { PORT } = require('./config/serverConfig');
const connect = require('./config/dbconfig');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/login-routes');
const { passportAuth } = require('./config/passportConfig');
const passport = require('passport');
const studentRoutes = require('./routes/student-routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
passportAuth(passport);

app.use('/api', userRoutes);
app.use('/students', studentRoutes);

app.listen(PORT, async () => {
    console.log(`Server started on PORT:${PORT}`);
    await connect();
    console.log('MONGODB server connected');
})