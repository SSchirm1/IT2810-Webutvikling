var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var cou = 0;
var click = 0;
function circlesize(evt) {
  var circle = event.target;
  var radius = circle.getAttribute("r");
  cou++;
  if (cou % 2 != 0) {
    circle.setAttribute("r", radius*7/4);
    circle.setAttribute("fill", 'yellow');
    circle.setAttribute("stroke", 'black');
  }
  else {
    circle.setAttribute("r", radius*4/7);
    circle.setAttribute("fill", 'blue');
    circle.setAttribute("stroke", 'white');
  }
}

// Canvas
var x = 50;
var y = 150;
var count = 0;
function animate() {
  if (x < 250 && count == 0) {
    requestAnimationFrame(animate);
    ctx.clearRect(0,70,innerWidth, 135);
    createLine();
    creategreenrect();
    createbluerect();
    createCircle(x,y,'blue','white');
    x++;
  }
  else {
    if (x > 50) {
      count = 1;
      requestAnimationFrame(animate);
      ctx.clearRect(0,70,innerWidth, 135);
      createLine();
      creategreenrect();
      createbluerect();
      createCircle(x,y,'yellow', 'black');
      x--;
    }
    else {
      count = 0;
      animate();
    }
    click = 1;
  }
}


function createCircle(x,y,fill, stroke) {
  ctx.beginPath();
  ctx.arc(x,y,50,0,Math.PI * 2, false);
  ctx.lineWidth = 10;
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.strokeStyle = stroke;
  ctx.stroke();
}

// linje
function createLine() {
  ctx.beginPath();
  ctx.moveTo(0,150);
  ctx.lineTo(300,150);
  ctx.stroke();
}
createLine();

// blå trekant
function createbluerect() {
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(150,0);
  ctx.lineTo(0,145);
  ctx.fillStyle = "blue";
  ctx.fill();
}

// grønn trekant
function creategreenrect() {
  ctx.beginPath();
  ctx.moveTo(150,0);
  ctx.lineTo(300,0);
  ctx.lineTo(300,145);
  ctx.fillStyle = "green";
  ctx.fill();
}

creategreenrect();
// gul trekant
ctx.beginPath();
ctx.moveTo(150,220);
ctx.lineTo(150,280);
ctx.lineTo(20,280);
ctx.fillStyle = "yellow";
ctx.fill();

// lysegrønn trekant
ctx.beginPath();
ctx.moveTo(150,220);
ctx.lineTo(150,280);
ctx.lineTo(280,280);
ctx.fillStyle = "lime";
ctx.fill();

function getClickPosition(e) {
  var x = e.clientX;
  var y = e.clientY;
}

//jquery
$(document).ready(function(){
  $("#hide").click(function(){
    $("#dokumentasjon").hide();
  });
  $("#show").click(function(){
    $("#dokumentasjon").show();
  });
  $("#sirkel").click(function() {
    circlesize(event);
  })
  $("#blå").hover(function() {
    $(this).css('fill', 'green');
  })
  $("#grønn").hover(function() {
    $(this).css('fill', 'blue');
  })
  $("#grønn").mouseleave(function() {
    $(this).css('fill','green');
  })
  $("#blå").mouseleave(function() {
    $(this).css('fill','blue');
  })
});


createbluerect();
// animate();

function init() {
  var cir = createCircle(50,150,'blue','white');
  createLine();
  $("#canvas").click(function(e){
    var offset = $(this).offset();
    console.log(offset);
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x + " " + y);
    console.log(Math.pow(x-50,2)+Math.pow(y-50,2));
    if (Math.pow(x-55,2)+Math.pow(y-150,2) < Math.pow(50,2)) {
      console.log("clicked");
      if (click == 0) {
        animate();
      }

    }
  })
}

init();
