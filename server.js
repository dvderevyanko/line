const express = require('express');

const app = express();

//comment for development
//const port = process.env.PORT || 5000;

//prod version
const port = process.env.PORT || 3000;
const path = require('path');
app.use(express.static(path.join(__dirname, '/client/build')));
//end

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});



//https://github.com/mapbox/node-sqlite3/blob/master/examples/simple-chaining.js
//https://github.com/mapbox/node-sqlite3/wiki/API#databasegetsql-param--callback

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db.db');

app.get('/api/hello2', (req, res) => {
  db.all("SELECT rowid AS id, info FROM lorem", function(err, rows) {
    res.send(rows);
  });
});


db.serialize(function() {
  /*db.run("CREATE TABLE lorem (info TEXT)");
  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();*/
  /*db.all("SELECT rowid AS id, info FROM lorem", function(err, rows) {
    res.send(rows);
  });*/
});
 
//db.close();