var express = require("express");
var app = express();
var path = require("path");
//just saw that path was required while creating the readme

require("./app/routing/apiRoutes.js");
require("./app/routing/htmlRoutes.js");

/*var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: ""
});
sql connection not needed?
*/

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    createProduct();
});




