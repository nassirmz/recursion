// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //native values
  if(obj ===null || typeof obj ==="number" || typeof obj ==="boolean") {
  	return '' + obj;
  }
  else if(typeof obj ==='undefined' || typeof obj ==='function') {
  	return;
  } else if(typeof obj ==="string") {
  	return '"' + obj + '"';
  } else if(Array.isArray(obj)) {
  	var newArray = '[';

  	for(var i = 0; i < obj.length; i +=1) {
      if(typeof obj[i] ==='undefined' || typeof obj[i] ==='function') {
        newArray += null + (i !== obj.length - 1 ? ',' : '');  
      }
      else
  		newArray +=stringifyJSON(obj[i]) + (i !== obj.length - 1 ? ',' : '');  
  	}
  	return newArray + ']';
  } else if(typeof obj =="object") {
  	var keys = Object.keys(obj);
  	var newObject = '{'
  	for( var i = 0; i < keys.length;i +=1) {
      if(typeof obj[keys[i]] ==='undefined' || typeof obj[keys[i]] ==='function'){
        newObject += '';
      }
      else {
  		  newObject += '"' + keys[i] + '":' + stringifyJSON(obj[keys[i]]) + (i !== keys.length - 1 ? ',' : '');
      }
  	}
  	return newObject + '}';
  }
}
