'use strict';
// Load dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://rprasad.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'http://localhost:3001',
    issuer: "https://rprasad.auth0.com/",
    algorithms: ['RS256']
});

// Public route
app.get('/api/deals/public', (req, res)=>{
  let deals = [
    {
    id: 12,
    name: 'Product Public',
    description: 'This is publicly visible',
    originalPrice: 19.99, // Original price of product
    salePrice: 9.99 // Sale price of product
   }
  ];
  res.json(deals);
})

// Private route
app.get('/api/deals/private', authCheck, (req,res)=>{
  let deals = [
    {
    id: 34,
    name: 'Product Private',
    description: 'This is only for the private members',
    originalPrice: 19.99, // Original price of product
    salePrice: 9.99 // Sale price of product
   }
  ];
  res.json(deals);
})


app.listen(3001);
console.log('Serving deals on localhost:3001');