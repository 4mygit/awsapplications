const homies = require('../db/')

const homeCall = (req,res)=>{
   return res.status(200).json({"val":"Home page"})
}

module.exports = homeCall;