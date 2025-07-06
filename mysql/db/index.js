const {Sequelize} = require ('sequelize');

const sql = new Sequelize('SQS','root', 'root1234', {
    host:'mydbforlambda.c364equyqci1.ap-south-1.rds.amazonaws.com',
    dialect: 'mysql',
     define: {
        timestamps: false
    }
});

(async () => {
  try{
    await sql.authenticate();
    console.log('Connected to mysql')
  }
  catch(error){
    console.log('Error in connection', error)
  }

})()


module.exports = sql