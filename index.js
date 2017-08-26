import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './router';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://admin:CetrK5t5J5ATVS8t@cluster0-shard-00-00-3utv2.mongodb.net:27017,cluster0-shard-00-01-3utv2.mongodb.net:27017,cluster0-shard-00-02-3utv2.mongodb.net:27017/main?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', {
  useMongoClient: true,
});

const app = express();

app.set('port', (process.env.PORT || 5000));
// Logger that outputs all requests into the console
app.use(morgan('combined'));
// Use v1 as prefix for all API endpoints
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(router);


const server = app.listen(app.get('port'), () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
