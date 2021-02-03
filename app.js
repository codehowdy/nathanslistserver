require('dotenv').config();
let express = require('express');
let app = express();


let sequelize = require('./db');



app.use(express.static(__dirname + '/public'));
console.log(__dirname);

app.get('/', (request, response) => response.render('index'));




app.use(express.json());

sequelize.sync();
//sequelize.sync({force:true});

const usercontroller = require('./controllers/userController')
app.use('/user', usercontroller)

const employercontroller = require('./controllers/employerController')
app.use('/employer', employercontroller)

const reviewcontroller = require('./controllers/reviewController')
app.use('/review', reviewcontroller)






app.listen(process.env.PORT, function (){
    console.log(`App is listening on port ${process.env.PORT}`)
});