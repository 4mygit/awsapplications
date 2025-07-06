const {DataTypes, Sequelize} =  require('sequelize');
const dbconn = require('../db/')


const homeCall = async (req,res)=>{

const User = dbconn.define('hvacdata', {
   hvac_data:{
      type:DataTypes.STRING
   }

})
User.sync();
   console.log('Function called')


try{
const user = await User.create({
   hvac_data:"The valve data"
})
}catch(err){
   console.log(err)
}

   return res.status(200).json({"val":"Home page"})


}

module.exports = homeCall;