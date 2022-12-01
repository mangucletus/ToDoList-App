const express = require('express');
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); // require created local module
const { numeric } = require('tar');

const app = express();


const items = [];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

    const day = date.getDay(); // date is generated in date.js

    res.render('list', {listTitle: day, newListItems: items});
   
});

app.post("/", function(req, res){
    const item = req.body.newItem;

    if (req.body.newItem === "Work") {
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/"); // redirect to the home route after adding new list item(s)
    }

  
    
})

app.get("/work", function( req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});

})

app.post("/work", function(req, res){
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})




app.listen(3000, function(){
    console.log("Server is running on port 3000");
})



