var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/yelp_camp", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}); 

var campgroundSchema = new mongoose.Schema({
	name : String,
	image: String
});

var Campground = mongoose.model("Campground",campgroundSchema);

// Campground.create({
// 	name: "goa" ,
// 	image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-9LfisdSdYIqNdPTK1wHngoqIpfAHxsHCS7ML6nQ8XvVKVy5Q&usqp=CAU"},function(err,campgrounds){
// 	if(err){
// 		console.log("error");
// 	}
// 	else{
// 		console.log("campground created");
// 		console.log(campgrounds);
// 	}
// });

// Campground.find({},function(err,campgrounds){
// 	if(err){
// 		console.log("error");
// 	}
// 	else{
// 		console.log("all campgrounds");
// 		console.log(campgrounds);
// 	}
// });

// var campgrounds = [
// 		{name: "pune",image: "https://static2.tripoto.com/media/filter/tst/img/1558375/TripDocument/1557737973_camping_tents_0.jpg" },
// 		{name: "goa" , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-9LfisdSdYIqNdPTK1wHngoqIpfAHxsHCS7ML6nQ8XvVKVy5Q&usqp=CAU"},
// 		{name: "sikkhim" , image: "https://www.holidify.com/images/cmsuploads/compressed/maxresdefault_20190823143836.jpg"},
// 		{name: "pune",image: "https://static2.tripoto.com/media/filter/tst/img/1558375/TripDocument/1557737973_camping_tents_0.jpg" },
// 		{name: "goa" , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-9LfisdSdYIqNdPTK1wHngoqIpfAHxsHCS7ML6nQ8XvVKVy5Q&usqp=CAU"},
// 		{name: "sikkhim" , image: "https://www.holidify.com/images/cmsuploads/compressed/maxresdefault_20190823143836.jpg"}
// 	];

app.use(bodyParser.urlencoded({extend: true}));

app.set("view engine","ejs")

app.get("/",function(req,res){
	res.render("landing");
});

app.get("/campgrounds",function(req,res){
	
	Campground.find({},function(err,allcampgrounds){
	if(err){
		console.log("error");
	}
	else{
		
		res.render("campgrounds", {Campground,allcampgrounds});
	}
});
	
	
});

app.post("/campgrounds",function(req,res){
	var name= req.body.name;
	var image= req.body.image;
	var newcamp = {name: name, image: image};
	Campground.create(newcamp,function(err,newcampground){
	if(err){
		console.log("error");
	}
	else{
		console.log("campground created");
		console.log(newcampground);
		res.redirect("/campgrounds");
	}
});
	
	
});

app.get("/campgrounds/new",function(req,res){
	res.render("new");
})

app.listen(3000,function(){
	console.log("server started listening on port 3000");
});