var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStragedy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');
var session = require('session');
var methodOverride = require('method-override')
const fetch = require("node-fetch");
const path = require("path");


var userSchema = new mongoose.Schema({
	username: String,
	companyName: String,
	fullName: String,
	compDesc: String, 
	password: String,
	pic: String,
	recommand: String,
	phone: String,
	created: {type: Date, default: Date.now}
});
userSchema.plugin(passportLocalMongoose);
var User = mongoose.model("User", userSchema);


app.use(require("express-session")({
	secret:"evia",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



passport.use(new LocalStragedy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect(process.env.MONGODB_URI || "mongodb://investmentsDB:kobim1989@ds017636.mlab.com:17636/heroku_xx62jhd2");
app.set("view engine", "ejs");
app.use("/public", express.static("public"));
app.use((req, res, next)=>{
			res.locals.currentUser=req.user;
	next();
})
app.use(methodOverride("_method"));


var commentSchema = new mongoose.Schema({
	userId:  {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	comment: String,
	created: {type: Date, default: Date.now}
});

var Comment = mongoose.model("Comment", commentSchema);

var investSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	investName: String,
	area: String, 
	desc: String, 
	pic: String,
	price: String,
	yield: String,
	risk: String,
	recommand: String,
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}

	],
	created: {type: Date, default: Date.now}
});
var Invest = mongoose.model("Invest", investSchema);



app.get("/indexPost", (req, res)=> {
	Invest.find({}).populate("userId").populate({
    path: 'comments',
    populate: { path: 'userId' }
    }).exec((err, invests)=> {
    var userInfo=[];
	User.find({}, (err, users)=> {
		invests.forEach(elem=> {
			elem.comments.forEach(elem2=>{userInfo.push(users.find(user => user._id.equals(elem2.userId)))});
		});
			res.json({invest: invests, userInfo: userInfo});
});	
	});
});



app.get("/signUp", (req, res)=> {
	res.render("signUp");
	});

app.get("/index", (req, res)=> {
	res.render("index");
	});

app.get("/user", (req, res)=> {
	res.render("user");
	});


app.post("/signUp2", (req, res)=> {
	console.log(req.body.username);
	var newUser = new User({username: req.body.username, fullName: req.body.fullName, companyName: "", phone: "", companyDesc: "", pic: "notConnect.png"})
	User.register(newUser, req.body.password, (err, user)=> {
		console.log(req.body.username);
passport.authenticate("local")(req, res, ()=>{res.render("signUp2", {username: req.body.fullName, currentId: user._id})});	
});	
	});


	

app.put("/signUp3/:id", (req, res)=> {
	User.findByIdAndUpdate(req.params.id, req.body.reg, (err, user)=> {
	});
	res.render("signUp3");
	});

app.put("/signUp4/:id", (req, res)=> {
	var pic=req.body.pic;
	if (pic=="") {pic="notConnect.png";};
	User.findByIdAndUpdate(req.params.id, {"pic": pic}, (err, user)=> {
	});
	res.redirect("/index");
	});



app.post("/invests", (req, res)=> {
	if (!(req.isAuthenticated())) {return(res.redirect("/login"));}
	var newInvestName = req.body.investName;
	var newYield = req.body.newYield;
	var newPrice = req.body.price;
	var newDesc = req.body.desc;
	var newArea = req.body.area;
	var pic = req.body.pic;	
	Invest.create({
	userId: req.user,
	investName: newInvestName,
	area: newArea, 
	desc: newDesc,
	pic: pic,
	price: newPrice,
	yield: newYield,
	risk: "4",
	recommand: "4.5"
},
 (err, data)=> {
	console.log(data);
	if (err) 
		console.log("err");
	});
	res.redirect("/index");
});

app.get("/login", (req, res)=> {
	res.render("login");
	});

app.post('/login',
  passport.authenticate('local', { successRedirect: '/index',
                                   failureRedirect: '/login' } 
                                   ));

app.get('/logOut', (req, res)=>{
	req.logout();
	res.redirect("/index");
});



app.get('/user1', (req, res)=> {
	if (!(req.isAuthenticated())) {return(res.redirect("/login"));}
	User.find({}, (err, users)=> {	
	Invest.find({}, (err, invests)=> {
		Comment.find({}, (err, foundComments)=> {
		var investsInfo=[];
		var commentsObj = [];
		var commentUsers=[];
		for (var i=0; i<invests.length; i++) {
			if (invests[i].userId.equals(req.user._id)) {
			investsInfo.push(invests[i]);
			}	
		}
		for (var i =  0; i < investsInfo.length; i++) {
			commentsObj[i]=[];
			for (var j = 0; j < investsInfo[i].comments.length; j++) {
				console.log(i);console.log(j);
				(commentsObj[i]).push(foundComments.find(element=>element._id.equals(investsInfo[i].comments[j])));
				if (commentsObj[i][j]) {
					commentUsers.push(users.find(element=>element._id.equals(commentsObj[i][j].userId)));
				}
			}
		}
		res.render("user1", {invest: investsInfo, userInfo: commentUsers, comments: commentsObj});
		});
		});
});
});


app.get('/user1/resume', (req, res)=> {
	if (!(req.isAuthenticated())) {return(res.redirect("/login"));}
	res.render("resume");
});


app.get('/user2', (req, res)=> {
	if (!(req.isAuthenticated())) {return(res.redirect("/login"));}
	(Invest.find({userId: req.user._id}).populate("comments")).exec((err, users)=>{
		console.log(users[0].comments[0]);
		res.render("/user1");
	})
});

app.post('/comment/:id', (req, res)=> {
	Invest.findById(req.params.id, (err, invest)=>{
	var userName = req.user.username;
	var comment = req.body.comment;
	var newComment = new Comment({userName: userName, comment: comment});
	Comment.create({
	userId: req.user, 
	comment: comment
},
 (err, commentBuild)=> {
	if (err) 
	console.log("err");
	invest.comments.push(commentBuild);
	invest.save();
	res.redirect("/index");
		});
});
});


 generateFolder = (invests, budget, flag) => {
 	if (flag==0) {return null;}
 	var rand1 = Math.floor(Math.random() * invests.length);
 	 var rand2 = Math.floor(Math.random() * invests.length);
 	while (rand1==rand2) {
 	rand2 = Math.floor(Math.random() * invests.length);
 }
 var rand3 = Math.floor(Math.random() * invests.length);
 while (rand3==rand1||rand3==rand2) {
 	rand3=Math.floor(Math.random() * invests.length);
 }
 var first=invests[rand1];
  var second=invests[rand2];
 var third=invests[rand3];
 var total=parseInt(first.price)+parseInt(second.price)+parseInt(third.price);
 console.log(total);
 
if ((budget>=(parseInt(first.price)+parseInt(second.price)+parseInt(third.price)))&&((budget*0.8)<=(parseInt(first.price)+parseInt(second.price)+parseInt(third.price))))
{
	return ({first: first, second: second, third: third});
}
flag=flag-1;
return generateFolder(invests, budget, flag);
 	}



app.post("/buildFolder", (req, res)=> {
	var divider = req.body.divider;
	var budget = req.body.budget;
	Invest.find({}, (err, invests)=> {
		invests.forEach(elem=>elem.price=parseInt(elem.price));
		var choosen = generateFolder(invests, budget, 20);
		var first=null;
		var second=null;
		var third = null;
		if (choosen) {first=choosen.first; second=choosen.second; third=choosen.third;}
		res.send({ posts: invests, first: first, second: second, third: third});
	});
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
	app.use(express.static("/build"));
}

app.listen(PORT, ()=>
	console.log("server running"));
