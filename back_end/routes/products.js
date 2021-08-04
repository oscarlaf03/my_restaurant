const fs = require('fs');
const path = require('path');
const PRODUCT_DATA_FILE = path.join(__dirname, '../server-product-data.json');



module.exports = (app) => {

  app.get('/products', (req, res) => {
    const categories = req.query.categories
    fs.readFile(PRODUCT_DATA_FILE, (err, data) => {
      res.setHeader('Cache-Control', 'no-cache');
      products = JSON.parse(data);
      if (categories) {
        if (Array.isArray(categories)){
          categories = categories.map(category => parseInt(category));
          products = products.filter(p => categories.includes(p.category_id));
        } else {
          products = products.filter(p => p.category_id === parseInt(categories));
        }
      }
      res.json(JSON.parse(data));
    });
  });

}
