import mongoose from 'mongoose';
import Player from './model/Player';

const { players } = require('./players.json');

// Connect to MongoDB
mongoose.connect('mongodb://admin:CetrK5t5J5ATVS8t@cluster0-shard-00-00-3utv2.mongodb.net:27017,cluster0-shard-00-01-3utv2.mongodb.net:27017,cluster0-shard-00-02-3utv2.mongodb.net:27017/main?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

// Go through each movie
players.forEach((data) => {
  const player = new Player(data);
  player.save();
});
