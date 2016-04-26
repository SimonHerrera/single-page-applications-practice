// Section 1.) When you click on 3 items with Class .article-section...
// prints what you clicked on;

var outputTar = document.getElementById('output-target');
var articleSec = document.getElementsByClassName('article-section');
// console.log("outputTar", outputTar );      //shows whole 'output-target'
// console.log("articleSec", articleSec );    //shows all 3 in a DOM list

//listens for click - logs each click on the 3
function handleSecClick(MouseClick) {         //MouseClick is var name
  console.log("MouseClick", MouseClick );     //monitors clicks
  var replace = MouseClick.target.innerHTML;  //var = click.target.innerHTML
  //id'output-target' = var outputTar and now innerHTMl on index will be replace - inners of MouseClick targers inners
  outputTar.innerHTML = "You just clicked on " + replace + " just now.";
}

//articleSec has a DOM list (looks like array)
//*REQUIRED! Loops through articleSec.item(i) X's
for (i = 0; i < articleSec.length; i++) {
  // console.log("length", articleSec.length );  // show articleSec.length is 3
  articleSec.item(i).addEventListener("click", handleSecClick); //click calls handleSecClick
}
//above loop gets articleSec length and goes through that many times
//2nd line cycles through each instance then adds listener( , ) and calls the fucntion is pressed

//***End Section 1***

// Section 2.) Creates actions for mouseover and mouseout
// on header ID #page-header

var header = document.getElementById('page-header');
var originalText = header.innerHTML
console.log("test", originalText );

function over(MoveOver) {
  header.innerHTML = ("<h1>Changes</h1>");
}

function out(MoveOut) {
  header.innerHTML = originalText;
}

header.addEventListener("mouseover", over);
header.addEventListener("mouseout", out);

// OR you could mouse over header and have
// something else change, not the header itself as Joe did
//***End Section 2***


//Section 3.) - Have an active listener mimic what is typed
//Questions

var typing = document.getElementById('keypress-input');

typing.addEventListener("keyup", function (event) {
console.log("listen", event ); //shows key pressed
outputTar.innerHTML = event.target.value; // event.target.value
});
//*** End Section 3


//Section 4.) - Click button, make a change

var guineaPig = document.getElementById('guinea-pig');

document.getElementById("add-color")
  .addEventListener("click", function() {
  guineaPig.classList.toggle("blue");
  });

document.getElementById("make-large")
  .addEventListener("click", function() {
    guineaPig.classList.toggle("large");
  });

document.getElementById("add-border")
  .addEventListener("click", function() {
  guineaPig.classList.toggle("border");
  });

document.getElementById("add-rounding")
  .addEventListener("click", function() {
    guineaPig.classList.toggle("round")
  });


//Steve trial for Event Listener
var steverOutput = document.getElementById("output-target");

document.getElementById("steve").addEventListener("click", function (event) {
  steverOutput.innerHTML = `You clicked on ${event.target.innerHTML}`;
});
