const db=require('../config/config');
const Books=db.sequelize.models.books;
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
let jwtSecretKey;
const addUser=async(req,res)=>{
    const token=req.header.Authorization
    console.log(token);
    const data= req.body;
    try{
        const Data=await Books.create(data);
        jwtSecretKey = process.env.JWT_SECRET_KEY;
        const token=  jwt.sign(Data.dataValues,jwtSecretKey)
        res.send({Data,token})
        
    }
catch(err){
  
        res.send(err)
    } 
}
const getBook=async(req,res)=>{
    console.log( req.header)
    try{
        const Data=await Books.findAll();
        res.send(Data)
    }
    catch(err){
        res.send(err)
    }
}
 const getUpdatebook=async(req,res)=>{
    const token=req.header['Authorization']
    console.log(token);
    //  const decodedToken=jwt.verify(token,jwtSecretKey)

     try{
        await Books.update(req.body,{
            where:{
                id:req.params.id
            }
        })
        const Data=await Books.findOne({
            where:{
                id:req.params.id
            }
        });
        res.send({Data,token})
    }
    catch(err){
        res.send(err)
    }
 }
 const deleteBook=async(req,res)=>{
    try{
        const data =await Books.findOne({
            where:{
                id:req.params.id
            }
        })
        await Books.destroy({
            where:{
                id:req.params.id
            }
        })
        

        res.send({data,message:"succesfully"})
    }
catch(err){
        res.send(err)
    }

}


const  registerUser= async(req,res)=>{

    
}
  module.exports={addUser,getBook,getUpdatebook,deleteBook}