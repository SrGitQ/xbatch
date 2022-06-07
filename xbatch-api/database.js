const { MongoClient } = require("mongodb");
const connectStr = "mongodb+srv://root:holahola@jimbo.7d4eq.mongodb.net";
//const connectStr = 'mongodb://localhost:27017/'
const client = new MongoClient(connectStr, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;
module.exports = {
  connectToServer: function (callback) {
    console.log("hey");
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db("Covid_19");
      console.log("Good!");

      return callback();
    });
  },

  getDb: () => {
    return dbConnection;
  },
};
