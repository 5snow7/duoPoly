let can;let tv;let tChoice;

function setup(){
can=createCanvas(700,500);can.position(30,25);
can.class('bdd');	
start2();
tv=new logo(200,200,0);
tChoice=new logo(200,200,0);
textSize(20);
  //testing making changes in github
}

function draw(){

mov2.move();mov2.chWbdd();
picmov.position(mov2.pos.x,mov2.pos.y);
background(200,150,50);
chgRec();
ellipse(50,50,30,30);	
tv.set1(450,150,0);
duoPoly(tv,multvec[0],multvec[1],multvec[2],multvec[3],multvec[4]);
text("1st length "+multvec[0],30,400);
text("2cd length "+multvec[2],30,420);
text("1st angle "+multvec[1],30,440);
text("2cd angle "+multvec[3],30,460);
movA.move();movA.chbdd();movA.show();

}

