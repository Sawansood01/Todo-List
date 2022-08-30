
const express = require("express");
const bodyParser = require("body-parser");


const app = express();
var items =["Buy Food", " Full Stack Course"];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req, res){

    const today = new Date();
     const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
     };

     let day = today.toLocaleDateString("en-US", options);



//     var currentDay = today.getDay();
//     var day ="";
    
//    switch(currentDay)
//    {
//     case 0:
//         day="Sunday";
//         break;
//         case 1:
//         day="Monday";
//         break;
//         case 2:
//         day="Tuesday";
//         break;
//         case 3:
//         day="Wednesday";
//         break;
//         case 4:
//         day="Thursday";
//         break;
//         case 5:
//         day="Friday";
//         break;
//         case 6:
//         day="Saturday";
//         break;
//         default:
//             console.log("Error"+ currentDay);
//    }


    // if(today.getDay() === 6 || today.getDay() === 0){
    //     day = "weekend";
    // }
    // else{
    //     day="Weekday";
    // }

    res.render("list", {kindOfDay: day, newListItem: items});
});


app.post("/", function(req, res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("server started on port 3000")
});