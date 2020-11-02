const express = require('express');
const app = express();

let ejs = require('ejs');

const axios = require('axios');

app.use(express.static(__dirname + '/Public'));

app.get("/", function(req, res){
  res.render("home.ejs");
  });

app.get("/data", async(req, res) => { //This is built using the PROMISES syntax
  var inputSearch = req.query.searchTerm; //This var takes the value input into the search box on home.ejs or data.ejs, in that document, "searchTerm" is the name value of the input, this is transmitted to this document and req.query sets it as the value of this var.
  
  var apiRequest = (inputSearch) ? inputSearch.toLowerCase() : 1; //This ternary checks to see if a value has been set for inputSearch by seeing if it even exists, if the user left the input field blank this variable defaults to 1 as inputSearch does not exist with no data.
axios.get('https://pokeapi.co/api/v2/pokemon/' + apiRequest) //The API plus the variable holding the data to search for. 
.then((body) => {
	var pokeData = body.data;  
res.render("data.ejs", {EJSpokeData: pokeData});
})
.catch((err) => {
  res.send('Data not found', err.statusCode);
})
 });

app.listen(3000, function() { 
    console.log('Put http://localhost:3000 into the url bar to see your new app'); 
  });
  