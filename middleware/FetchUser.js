const jwt = require('jsonwebtoken');
// const JSON_WT = "DSD46546987(*&^%$#@";
const JSON_WT = process.env.JSON_WT;
const fetchUser = (request,response,next)=>{
    try{
        const token = request.header('token');
        if(!token){
            response.status(400).json({"error" : {"type" : "Access Denied"}})
        }else{
            const procure = jwt.verify(token,JSON_WT);
            request.data = procure.data;
            next();
        }
    }catch(e){
        response.status(400).json({"error" : {"type" : "Bad Request"}})
    }
}
module.exports = fetchUser;