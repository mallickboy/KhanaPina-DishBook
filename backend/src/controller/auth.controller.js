const signup= (req, res, next)=>{
    res.status(201).json({
        status:"sucess",
        message:"Signup route is working",
    });
};
module.exports={ signup};