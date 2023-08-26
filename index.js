const express = require("express");

const itemRoutes = require("./routes/items");
const baseRoutes =require("./routes/base");
 
const app = express();
const port = 3000;

app.use(express.json());

app.use("/", baseRoutes);
app.use("/items", itemRoutes);

//start the server
app.listen(port, ()=> {
    console.log(`Server is running on port${port}`);

});