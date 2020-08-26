import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './src/routes/routes';

const app = express();
const PORT = 4000;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

// routes
routes(app);

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  mongoose.Promise = global.Promise;

  //mongoose.connect('mongodb://localhost:4000/productsdb', options);

  mongoose.connect('mongodb://localhost/productsdb', options);
