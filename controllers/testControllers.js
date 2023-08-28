 const  testController=(req,res)=>{
    res.status(200).send({
        message:"Welcome Ravikant",
        success:true
    })
}
module.exports={testController}