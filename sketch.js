var dog, happyDog;
var database;
foodS;
foodStock

function preload()
{
	//load images here
}

function setup() {
	createCanvas(500, 500);
  
  foodStock=database.ref('food');
  foodstock.on("value", readstock);
}


function draw() {  

  dog = createSprite (250, 100, 10, 10);

  backgroun(46, 139, 87)

  if (keyWentDown (UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  
  textSize(20);
}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {

  database.ref('/').update({
    Food:x
  })
}

