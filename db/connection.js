import mongoose from "mongoose"

mongoose.set('returnOriginal', false);

mongoose.connect("mongodb://127.0.0.1:27017/project2").catch((err) => {
    console.log(`Connection Error to Mongo: ${err.message}`);
});

mongoose.connection.on('disconnected', () => [
    console.log('Disconnected from Mongo!')

]);

mongoose.connection.on('error', (err) => {
    console.log(`Mongo connection erro: ${err}`);
});

export default mongoose.connection;