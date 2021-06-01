import mongoose from 'mongoose'

function connect() {
  return new Promise((resolve, reject) => {
    mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    const db = mongoose.connection
    db.on('error', (err) => {
      console.error('connection error:', err)
      reject(err)
    })
    db.once('open', () => {
      console.log('Databse connection is established');
      resolve(true);
    });
  })
}

export default connect;
