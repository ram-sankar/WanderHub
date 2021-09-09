module.exports = function(err, req, res, next){  
    //log the error...
    //console.log(err)
    res.status(500).send('Something failed.');
  }