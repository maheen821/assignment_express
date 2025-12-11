const express = require ('express');
const app = express();
const port = 3000; 
// ASSIGNMENT QUESTION NO.1 FUNCTION:TIME
function  requestTimeLogger (req , res , next){
    const currentTime = new Date().toLocaleString();
    req.requestTime = currentTime;
    console.log("Request Received Time at:" , currentTime);
    next();
}
app.get("/time" , requestTimeLogger , (req , res) =>{
  res.send(`Current Time Received at ${req.requestTime}:`)
})

// ASSIGNMENT QUESTION NO.2 Authentication middleware
function checkAuth(req, res, next) {
    const key = req.query.key;   // read key from query parameter

    if (key === '12345') {
        next(); // correct key → allow access
    } else {
        res.json({
            success: false,
            message: "Unauthorized access"
        });
    }
}
app.get('/secure', checkAuth, (req, res) => {
    res.send("Welcome to the secure area!");
});
app.listen(port ,() =>{
console.log(`Server running on http://localhost:${port}`);
});