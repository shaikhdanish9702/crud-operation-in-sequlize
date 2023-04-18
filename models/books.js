module.exports=(Sequelize,DataTypes)=>{
  const Users=Sequelize.define('books',{
      id:{
          type:DataTypes.INTEGER,
          primaryKey:true,
      },
      Name:DataTypes.STRING,
      dp:{
          type:DataTypes.STRING,
      }, 
  },
  { timestamps: false })
}