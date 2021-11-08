var database;
var dogImage;
var dog;
var foodCount = 0;
var addFood, minusFood;
var bedroomimage, gardenimage, washroomimage, liveingroomimage;
var berdoomButton, gardenButton, washroomButton, liveingroomButton;
var backgroundimage;
function preload() {
  dogImage = loadImage("images/dogImg.png");
  backgroundimage = loadImage("images/Food Stock.png");

}

function setup() {
  createCanvas(800, 700);
  database = firebase.database();
  dog = createSprite(600, 350, 100, 100);
  dog.addImage(dogImage);
  dog.scale = 0.3;

  addFood = createButton("add food");
  minusFood = createButton("minus food");

  berdoomButton = createButton("go to bedroom");
  gardenButton = createButton("go to garden");

  washroomButton = createButton("go to washroom");
  liveingroomButton = createButton("go to liveingroom");

  var ref = database.ref("food");
  ref.on("value", function (data) {
    foodCount = data.val();
  });
}

function draw() {
  background(backgroundimage);

  textSize(30);
  stroke("yellow");
  fill("yellow");
  text("food remaining with the dog is : " + foodCount, 50, 100);

  addFood.mousePressed(() => {
    database.ref("/").update({
      food: foodCount + 1,
    });
  });
  minusFood.mousePressed(() => {
    if (foodCount <= 0) {
      foodCount = 0;
    }
    database.ref("/").update({
      food: foodCount - 1,
    });
  });
  berdoomButton.mousePressed(() => {
    backgroundimage = loadImage("images/Bed Room.png");
    dog.visible=false
  });
  gardenButton.mousePressed(() => {
    backgroundimage = loadImage("images/Garden.png");
    dog.visible=false
  });
  washroomButton.mousePressed(() => {
    backgroundimage = loadImage("images/Wash Room.png");
    dog.visible=false
  });
  liveingroomButton.mousePressed(() => {
    backgroundimage = loadImage("images/Living Room.png");
    dog.visible=false
  });
  drawSprites();
}
