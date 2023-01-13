import mongoose from "mongoose"

mongoose.set('returnOriginal', false);



const url = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/character'

mongoose.connect(url).catch((err) => {
  console.log(`Error connection to MongoDB: ${err.message}`);
});

mongoose.connection.on('disconnected', () => [
    console.log('Disconnected from Mongo!')

]);

mongoose.connection.on('error', (err) => {
    console.log(`Mongo connection error: ${err}`);
});

export default mongoose.connection;