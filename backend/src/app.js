require("dotenv").config({path: `${process.cwd()}/.env`});
const express= require("express");
const authRouter= require("./route/auth.route")
const app= express();

app.get("/", (req, res)=>{
  res.status(200).json({
    status:"sucess",
    message:"REST API is working"
  });
});

//  All routes 
app.use("/api/v1/auth", authRouter);




// CATCH-ALL undefined routes
app.use("*", ( req, res, next)=>{
  res.status(404).json({
    status: "fail",
    message: "route not found ",
  });
});

// Internal server error
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: "Internal Server Error \n"+ err,
  });
});

// starting the server 
const hostname= process.env.APP_HOST || "127.0.0.1", port=process.env.APP_PORT || 4000;

app.listen(process.env.APP_PORT, ()=>{
  console.log(`Server is running at http://${hostname}:${port}`)
}); 