//Create variables here
var dog,happDog;
var database;
var foodS,foodStock;
var dogImg,happyDogIMG;
function preload()
{
  //load images here
  dogIMG = loadImage('images/dogImg.png');
  happyDogIMG = loadImage('images/dogImg1.png');
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()
  var dog = createSprite(200,200);
  dog.addImage(dogIMG);
  foodStock = database.ref('food');
  foodStock.on("value",readstock);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDogIMG);
  }

  drawSprites();
  textSize(30);
  text("foodstock")
  fill('red');
  
  //add styles here

}

function readStock(data) {
  foodS = data.val();
}

function writestock(x) {
  database.ref('/').update({
    Food:x
  })
}



