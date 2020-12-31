var ball;
var database,position;
function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballpos = database.ref('ball/position');
    ballpos.on("value",readpos);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writepos(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writepos(5,0);
    }
    else if(keyDown(UP_ARROW)){
        writepos(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        writepos(0,+5);
    }
    drawSprites();
}

/*function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}*/
function readpos(data){
    position = data.val();
    console.log(position);
    ball.x = position.x;
    ball.y = position.y;
}
function writepos(x,y){
    database.ref('ball/position').set({
        'x' :position.x+x,
        'y' :position.y+y
    })
}





