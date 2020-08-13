const express =  require('express');
const expressLayoutes = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();

//DB Config
const db = require('./config/keys').MongoURI;

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Data Base connect succefully'))
        .catch((e) => console.error(`Data Base is don't connect ${e}`))

//EJS
app.use(expressLayoutes);
app.set('view engine', 'ejs')

// BodyParser
app.use(express.urlencoded( { extended: false } ))

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`server is running in port ${PORT}`))