var kitty = document.getElementsByTagName('img')[0];
kitty.style.position = 'absolute';
kitty.style.left = '-200px';

var fwdKitty;
var backKitty;



var watchKittyWalk = function() {
  var oldLeft = parseInt(kitty.style.left);
  var catWalk = oldLeft + 9.4;
  kitty.style.left = catWalk + 'px';

  if(catWalk > window.innerWidth) {
    kitty.style.transform = 'scaleX(-1)';
    window.clearInterval(fwdKitty);
    walkback();
  }
};

var watchKittyWalkBack = function () {
  var oldLeft = parseInt(kitty.style.left);
  var catWalk = oldLeft - 9.4; 
  kitty.style.left = catWalk + 'px';

  if(catWalk < 0) {
    kitty.style.transform = 'scaleX(1)';
    window.clearInterval(backKitty);
    walkfwd();
  } 

}

var walkfwd = function (){
  fwdKitty = setInterval(watchKittyWalk, 100);
}
var walkback = function (){
  backKitty = setInterval(watchKittyWalkBack, 100);
}




walkfwd();








// var cat = document.getElementsByTagName('img')[0];
// cat.style.position = 'absolute';
// cat.style.left = '0px'

// var makeCatWalk = function() {
//     var catLeft = parseInt(cat.style.left)
//     var catWalk = catLeft + 10;
//     cat.style.left = catWalk + 'px';
//     if (catLeft.style.left === 40) {
//         setInterval(makeCatWalk, 50)
//     }
// }

// setInterval(makeCatWalk, 50)


