
const { MongoClient } = require("mongodb");
const mongoose  = require("mongoose");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const { GridFsStorage } = require("multer-gridfs-storage");
var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("myFirstDatabase");
        console.log("Successfully connected to MongoDB."); 

        // let bucket;
        // mongoose.connection.on("connection",()=>{
        //   var db = mongoose.mongo.GridFSBucket(db,{
        //     bucketName : "newBucket"
        //   });
        //   console.log(bucket);
        // })
      }
      return callback(err);
         });
  },

  
  getDb: function () {
    return _db;
  },
};
