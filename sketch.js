const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    createCanvas(1280, 610);

    engine = Engine.create();
    world = engine.world;

    //level 1 of the first pyramid
    fill("blue");
    block1 = new Block(460, 412);
    block2 = new Block(500, 412);
    block3 = new Block(540, 412);
    block4 = new Block(580, 412);
    block5 = new Block(620, 412);
    block6 = new Block(660, 412);
    block7 = new Block(700, 412);
    block8 = new Block(740, 412);

    //level 2 of the first pyramid
    fill("blue");
    block9 = new Block(500, 362);
    block10 = new Block(540, 362);
    block11 = new Block(580, 362);
    block12 = new Block(620, 362);
    block13 = new Block(660, 362);
    block14 = new Block(700, 362);

    //level 3 of the first pyramid
    block15 = new Block(540, 312);
    block16 = new Block(580, 312);
    block17 = new Block(620, 312);
    block18 = new Block(660, 312);

    //level 4 of the first pyramid
    block19 = new Block(580, 262);
    block20 = new Block(620, 262);

    //level 1 of the second pyramid
    block21 = new Block(950, 188);
    block22 = new Block(990, 188);
    block23 = new Block(1030, 188);
    block24 = new Block(1070, 188);
    block25 = new Block(1110, 188);
    block26 = new Block(1150, 188);

    //level 2 of the second pyramid
    block27 = new Block(990, 138);
    block28 = new Block(1030, 138);
    block29 = new Block(1070, 138);
    block30 = new Block(1110, 138);

    //level 3 of the second pyramid
    block31 = new Block(1030, 88);
    block32 = new Block(1070, 88);

    ground = new Ground(640, 660, 1400, 200);

    polygon = new Polygon(200, 200, 40);

    slingshot = new SlingShot(polygon.body, {x: 150, y: 200});

    stand1 = new Ground(600, 450, 400, 25);
    stand2 = new Ground(1050, 225, 300, 25);
}

function draw(){
    background(53, 40, 30);

    Engine.update(engine);

    textSize(30);
    fill("white");
    text("Drag the hexagonal stone and release it to launch it towards the tower...", 5, 30);

    textSize(30);
    fill("white");
    text("Press 'space' for a second chance to play...", 5, 60);

    textSize(30);
    fill("white");
    text("made by Aryan", 900, 500);


    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();

    ground.display();

    polygon.display();

    stand1.display();
    stand2.display();

    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        Matter.Body.setPosition(polygon.body, {x: 200, y: 50});
        slingshot.attach(polygon.body);
    }
}