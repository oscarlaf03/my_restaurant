
const fs = require('fs');
const path = require('path');
const CART_DATA_FILE = path.join(__dirname, '../server-cart-data.json');


module.exports = (app) => {

  app.get('/cart', (req, res) => {
    fs.readFile(CART_DATA_FILE, (err, data) => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(JSON.parse(data));
    });
  });

  app.post('/cart', (req, res) => {
    fs.readFile(CART_DATA_FILE, (err, data) => {
      const cartProducts = JSON.parse(data);
      const newCartProduct = {
        id: req.body.id,
        category_id: req.body.category_id,
        image_tag: req.body.image_tag,
        name: req.body.name,
        price: req.body.price,
        quantity: 1
      };
      // TODO smell??  FIXED
      // let cartProductExists = false;
      // cartProducts.forEach((cartProduct) => {
      //   if (cartProduct.id === newCartProduct.id) {
      //     cartProduct.quantity++;
      //     cartProductExists = true;
      //   }
      // });

      const match = cartProducts.find((cartProduct) => {
        return cartProduct.id === newCartProduct.id;
      })

      if (match) {
        match.quantity ++
        // cartProductExists = true;
      } else{
        cartProducts.push(newCartProduct);
      }

      // if (!cartProductExists) cartProducts.push(newCartProduct);
      fs.writeFile(CART_DATA_FILE, JSON.stringify(cartProducts, null, 4), () => {
        res.setHeader('Cache-Control', 'no-cache');
        res.json(cartProducts);
      });
    });
  });

  app.delete('/cart/delete', (req, res) => {
    fs.readFile(CART_DATA_FILE, (err, data) => {
      let cartProducts = JSON.parse(data);
      cartProducts.map((cartProduct) => {
        if (cartProduct.id === req.body.id && cartProduct.quantity > 1) {
          cartProduct.quantity--;
        } else if (cartProduct.id === req.body.id && cartProduct.quantity === 1) {
          const cartIndexToRemove = cartProducts.findIndex(cartProduct => cartProduct.id === req.body.id);
          cartProducts.splice(cartIndexToRemove, 1);
        }
      });
      fs.writeFile(CART_DATA_FILE, JSON.stringify(cartProducts, null, 4), () => {
        res.setHeader('Cache-Control', 'no-cache');
        res.json(cartProducts);
      });
    });
  });

  app.delete('/cart/delete/all', (req, res) => {
    fs.readFile(CART_DATA_FILE, () => {
      let emptyCart = [];
      fs.writeFile(CART_DATA_FILE, JSON.stringify(emptyCart, null, 4), () => {
        res.json(emptyCart);
      });
    });
  });


}
