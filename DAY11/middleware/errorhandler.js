// error middle ware takes 4 parameters   error , request, response , next 
const errorHandler =(err, req,res, next)=>{
    res.status(err.status).json({message:err.message});


}

export default errorHandler;