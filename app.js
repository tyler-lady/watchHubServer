require('dotenv').config();
let express = require('express');
let app = express();


app.use(require('./middleware/headers'));
app.use(express.json());


app.listen(process.env.PORT, function(){
    console.log(`App is listening on port ${process.env.PORT}`);
})