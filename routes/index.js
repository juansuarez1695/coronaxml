var express = require('express');
var router = express.Router();
require('dotenv').config();
const axios = require('axios');
const xml2js = require('xml2js');

/* GET home page. */
router.get('/', function(req, res, next) {  
  let resp;

  axios.get(process.env.CASDM,{headers: {"X-Requested-With": "XMLHttpRequest"}})
  .then((res)=>{
    
    // convert XML to JSON
    xml2js.parseString(res.data, (err, result) => {
      if(err) {
          throw err;
      }
  
      // `result` is a JavaScript object
      // convert it to a JSON string
      const json = JSON.stringify(result, null, 4);
  
      // log JSON string
      resp = json
      console.log(json);
      
  });   
  })
  res.json({mensaje:'Consumo XML'});
});

module.exports = router;
