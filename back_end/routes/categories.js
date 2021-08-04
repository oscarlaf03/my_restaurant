const fs = require('fs');
const path = require('path');
const CATEGORY_DATA_FILE = path.join(__dirname, '../server-category-data.json');

module.exports = (app) => {

  app.get('/categories', (req, res) => {
    fs.readFile(CATEGORY_DATA_FILE, (err, data) => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(JSON.parse(data));
    });
  });

}
