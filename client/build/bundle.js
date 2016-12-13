/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	
	
	var app = function(){
	  var url = 'https://restcountries.eu/rest/v1/all';
	  makeRequest(url, requestComplete);
	}
	var makeRequest = function(url, callback) {
	//create a new xmlhttprequest
	var request = new XMLHttpRequest();
	//open request tell it what method we want to use (get)
	request.open("GET", url);
	//set the call back we want it to run when it is complete
	request.onload = callback;
	//send the request
	request.send();
	}
	var requestComplete = function() {
	  console.log("success");
	  if (this.status !== 200) return;
	  var jsonString = this.responseText;
	  var countries = JSON.parse(jsonString);
	  populateList(countries);
	}
	var populateList = function(countries) {
	  var select = document.getElementById('country-list');
	  for(country of countries) {
	    var option = document.createElement('option');
	    option.innerText = country.name;
	    select.appendChild(option)
	  };
	
	var postCountries = function (event){
	
	  console.log(event.target);
	
	
	  var select = document.getElementById('country-list');
	   var selected = select.value;
	   console.log(selected);
	
	
	
	
	   
	      var url = "http://localhost:3000/bucketlist";
	      var request = new XMLHttpRequest();
	      request.open("POST", url);
	      request.setRequestHeader("Content-Type", "application/json");
	      request.onload = function(){
	        if (request.status == 200) {
	          console.log("Country added");
	        }
	      }
	      request.send(JSON.stringify({name: selected}));
	    
	
	
	
	
	
	
	
	
	
	
	   
	
	   // var makePostRequest = function(url, callback) {
	
	
	
	
	   // //create a new xmlhttprequest
	   // var request = new XMLHttpRequest();
	   // //open request tell it what method we want to use (get)
	   // request.open("POST", url);
	   // //set the call back we want it to run when it is complete
	   // request.onload = callback;
	   // //send the request
	   // request.send();
	
	
	
	}
	
	var button = document.getElementById('submit');
	button.onclick = postCountries;
	  
	  
	}
	window.onload = app;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map