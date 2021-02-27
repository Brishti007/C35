var ball;
var hypeBall , database , position;

function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
    hypeBall = createSprite(250,250,10,10);
    hypeBall.shapeColor = "red";

var hypeBallPosition = database.ref('Ball/Position');

hypeBallPosition.on('value',readPosition,showError);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){

database.ref('Ball/Position').set({
    'x': position.x + x , 
    'y': position.y + y          
})
  
}

function readPosition(data){

position = data.val();

    hypeBall.x = position.x;
hypeBall.y = position.y;

}

function showError(){

console.log("error in writing to the database")


}




