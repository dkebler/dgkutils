// My Personal Utility Module

var arRmFname = function () {
	var path  = require('path');
	var arr = arguments[0];
    var array = [];

//  conact all passed arrays    
   for (var i=1; i < arguments.length; i++) {
    arr = arr.concat(arguments[i]);
   } 	
// strip out filenames
    for(var i=0; i<arr.length; ++i) {
      arr[i] = path.dirname(arr[i]);
    }
// remove duplicate paths        
    var len = arr.length;
    var assoc = {};

    while(len--) {
        var itm = arr[len];

        if(!assoc[itm]) { // Eliminate the indexOf call
            array.unshift(itm);
            assoc[itm] = true;
        }
    }

      return array;
   };

module.exports.arRmFname = arRmFname;



