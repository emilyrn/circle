// background container
var bigContainer = document.createElement('div');
bigContainer.style.height='700px';
bigContainer.style.width='auto';
bigContainer.style.backgroundImage= "url('zen.png')";
bigContainer.style.backgroundRepeat = 'no-repeat';
bigContainer.style.backgroundImagSize ='cover';
document.body.appendChild(bigContainer);

//CALC THE AREA. GOOD GOD.

function calculateArea(){
  console.log('clicked');
  var userRadius = document.getElementById('userInput').value;
  var area = Math.PI * userRadius * userRadius;
  console.log(area);


  //golden ball
  var ball = document.createElement('img');
  ball.setAttribute('src', 'ball3.jpg');
  ball.setAttribute('height', (userRadius * 2 + 'px'));
  ball.setAttribute('width', (userRadius * 2 + 'px'));
  ball.style.borderRadius = '50%';
  bigContainer.appendChild(ball);


  if(userRadius==35){

    ball.style.position = 'absolute'; //enter 35 ball radius
    ball.style.left = '349px'; //enter 35 ball radius
    ball.style.top = '168px'; //enter 35 ball radius

  }
  else if(userRadius==45){
   ball.style.position = 'absolute'; //enter 45 ball radius
   ball.style.left = '469px'; //enter 45 ball radius
   ball.style.top = '303px'; //enter 45 ball radius

 }
  else{
    ball.style.position = 'static';
  }


};
