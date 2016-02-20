// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var array = [];
  var gebc = function(node) {
    if(node.classList && node.classList.length > 0) {
      var cl = Array.prototype.slice.apply(node.classList);
        if (cl.indexOf(className) > -1) {
          array.push(node);
        }
    }
    if(node && node.childNodes && node.childNodes.length > 0) {
      var nodes = Array.prototype.slice.apply(node.childNodes);
      nodes.forEach(function(val) {
        gebc(val);
      });
    }
  }
  gebc(document.body);
  return array;
}
