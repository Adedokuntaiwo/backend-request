const express = require("express");
const app = express();
const port = 3000;


//passing the request body
app.use(express.json());
//post,get,delete, put
// basic route

const items = [];
app.get("/", (req, res) => {
    return res
      .json({
        message: "Welcome to backend API",
        status: "success",
      })
      .status(200);
  });
app.get('/items', (req,res) => {
   return res
    .json({
        message: "Successfully fetched items",
        status: "success",
        data: items,
    })
    .status(200) 
});


app.post("/items",(req, res) => {
items.push(req.body);
return res.json({
    message: "Successfully added new items",
    status: "success"
})
.status(200)
});


//start the server
app.listen(port,()=> {
    console.log(`server is running on port ${port}`);
});