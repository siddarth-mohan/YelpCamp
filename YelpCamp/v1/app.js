var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
		{name: "pune",image: "https://static2.tripoto.com/media/filter/tst/img/1558375/TripDocument/1557737973_camping_tents_0.jpg" },
		{name: "goa" , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-9LfisdSdYIqNdPTK1wHngoqIpfAHxsHCS7ML6nQ8XvVKVy5Q&usqp=CAU"},
		{name: "sikkhim" , image: "https://www.holidify.com/images/cmsuploads/compressed/maxresdefault_20190823143836.jpg"},
		{name: "pune",image: "https://static2.tripoto.com/media/filter/tst/img/1558375/TripDocument/1557737973_camping_tents_0.jpg" },
		{name: "goa" , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-9LfisdSdYIqNdPTK1wHngoqIpfAHxsHCS7ML6nQ8XvVKVy5Q&usqp=CAU"},
		{name: "sikkhim" , image: "https://www.holidify.com/images/cmsuploads/compressed/maxresdefault_20190823143836.jpg"}
	];

app.use(bodyParser.urlencoded({extend: true}));

app.set("view engine","ejs")

app.get("/",function(req,res){
	res.render("landing");
});

app.get("/campgrounds",function(req,res){
	
	res.render("campgrounds", {campgrounds,campgrounds});
});

app.post("/campgrounds",function(req,res){
	var name= req.body.name;
	var image= req.body.image;
	var newcamp = {name: name, image: image};
	campgrounds.push(newcamp);
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req,res){
	res.render("new");
})

app.listen(3000,function(){
	console.log("server started listening on port 3000");
});