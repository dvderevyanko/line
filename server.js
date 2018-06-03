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
  db.all("SELECT rowid AS id, info FROM lorem", function (err, rows) {
    res.send(rows);
  });
});

//load nav tree
app.get('/api/price/:id', (req, res) => {
  let result = {};
  if (req.params.id < 0) {
    db.all("SELECT id, name, parent FROM price WHERE id > -1 ORDER BY id ASC", function (err, rows) {
      let result = {};
      let tempNavList = [];
      rows.forEach((element) => {
        let item = {
          id: element.id,
          title: element.name,
          parent: element.parent
        };
        if (item.parent < 0) {
          tempNavList[item.id] = item;
        } else {
          if (!tempNavList[item.parent].inner) {
            tempNavList[item.parent].inner = [];
          }
          tempNavList[item.parent].inner.push(item);
        }
      });
      result.navList = [];
      tempNavList.filter(el => el).forEach(el =>  result.navList.push(el));
      applyPriceContent(req.params.id, result, res);
    });
  } else {
    applyPriceContent(req.params.id, result, res);
  }  
});

function applyPriceContent(navId, result, res) {
  db.all("SELECT name, content, keywords, description FROM price WHERE id = " + navId, function (contentErr, contentRow) {
    result.title = contentRow[0].name;
    result.content = contentRow[0].content;
    result.keywords = contentRow[0].keywords;
    result.desciption = contentRow[0].desciption;
    res.send(result);
  });
};


app.get('/api/app', (req, res) => {
  let result = {
    carouselData : [],
    contactData : [],
    //title : '',  
    keywords : '',
    desciption : ''
  };
  db.all("SELECT * FROM carousel", function (err, rows) {
    rows.forEach((element) => {
      result.carouselData.push(element);
    });   
    db.all("SELECT * FROM app", function (err, rows) {
      result.contactData = {
        logo : rows[0].logo,
        city : rows[0].city,
        street : rows[0].street,
        phones : rows[0].phones.split(','),
      }; 
      result.keywords = rows[0].keywords;
      result.desciption = rows[0].desciption;
      res.send(result);
    }); 
  }); 
});

app.get('/api/work/all', (req, res) => {
  db.all("SELECT id, title, short, image, icon, price FROM work", function (err, rows) {
    let result = {
      navCards : [],
      artCards : []
    };
    rows.forEach((element) => {
      if (!element.image && element.icon) {
        result.navCards.push(element);
      } else {
        result.artCards.push(element);
      }
    }); 
    res.send(result);
  }); 
});


app.get('/api/work', (req, res) => {
  db.all("SELECT id, title, short, image, price FROM work WHERE image NOT NULL AND image <> ''", function (err, rows) {
    let result = {
      artCards : []
    };
    rows.forEach((element) => {
      result.artCards.push(element);
    }); 
    res.send(result);
  }); 
});

app.get('/api/work/:id', (req, res) => {
  db.all("SELECT id, title, content, keywords, description FROM work WHERE id == " + req.params.id, function (err, rows) {
    let result = {
      title : rows[0].title,
      content : rows[0].content,
      keywords : rows[0].keywords,
      description : rows[0].description,
    };
    res.send(result);
  }); 
});

app.get('*', function (request, response){
  response.sendFile(path.join(__dirname, '/client/build/index.html'))
})

db.serialize(function () {
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