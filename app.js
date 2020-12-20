let express = require('express');
let app = express();

let sequelize = require('./db');

app.use(express.json());

sequelize.sync();


const usercontroller = require('./controllers/userController')
app.use('/user', usercontroller)

const employercontroller = require('./controllers/employerController')
app.use('/employer', employercontroller)

//const reviewcontroller = require('./controllers/reviewController')
//app.use('/review', reviewcontroller)







app.listen(3000, function (){
    console.log("App is listening on port 3000!")
});