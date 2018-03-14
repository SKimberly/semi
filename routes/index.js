var express = require('express');
var router = express.Router();
var db=require("mysql_orm");
var settings = {
    host : "localhost",
    user : "root",
    password : "root",
    database : "registrar",
    port : "3306"
}
var query=db.mysql(settings);
/* GET home page */
/* GET home page. */
router.get('/', function(req, res, next) {
	query.get("users").execute((result)=>{
		res.send(result);
	});
	//return "seminario";
});

router.post("/registrar", function(req, res, next){
	console.log(req);
	var users = Object();
	users["nombre"] = req.body.nombre;
	users["email"] = req.body.email;
	users["password"] = req.body.password;
	query.save("users",users,function(s){
		console.log("Registro Exitoso......");
		res.send(s);

	});
});
module.exports = router;
