var canvas=new fabric.Canvas('mycanvas') ; 
block_image_width =30;
block_image_height =30;
player_x = 10 ;
player_y = 10 ;
 var player_object="";
function player_update(){
fabric.Image.fromURL("player.png",function(Img){
player_object =Img;
player_object.scaleToWidth(150);
player_object.scaleToheight(140);
player_object.set({
    top:player_x,
    bottom:player_y,
});
canvas.add(player_object);
});
}
function new_image(get_image){
    fabric.Image.fromURL( get_image,function(Img){
        block_object =Img;
        block_object.scaleToWidth(150);
        block_object.scaleToheight(140);
        block_object.set({
            top:player_x,
            bottom:player_y,
        });
        canvas.add(block_object);
        });
}
window.addEventListener("keydown",my_keydown);
   function my_keydown(e)
   {
   keyPressed=e.keyCode;
   console.log(keyPressed);
   if(e.shithKey == true && keyPressed=='77'){
    console.log("m and shift pressed together");
    block_image_width-=10;
    block_image_Height-=10;
document.getElementById("CurrentWidth").innerHTML=block_image_width ;
document.getElementById("CurrentHeight").innerHTML=block_image_height;


   }
   if(keyPressed=='38'){
    up();
}

if(keyPressed=='40'){
    down();
}
if(keyPressed=='39'){
    right();
}
if(keyPressed=='37'){
    left();
}

if(keyPressed=='104'){
    new_image('hulk_face.png');
    new_image('hulk_legs.png');
    new_image('hulk_left_hand.png');
    new_image('hulk_right_hand(1).png');
    new_image('hulkd_body.png');
}
if(keyPressed=='105'){
    new_image('');
    new_image('');
    new_image('');
    new_image('');
    new_image('');
}
if(keyPressed=='116'){
    new_image('thor_left_hand.png');
    new_image('thor_face.png');
    new_image('thor_right_hand(1).png');
    


}
if(keyPressed=='115'){
    new_image('spiderman_body.png');
    new_image('spiderman_face.png');
    new_image('spiderman_legs.png');
    new_image('spiderman_left_hand.png');
    new_image('spiderman_right_hand.png');
}
if(e.shithKey == true && keyPressed=='80'){
    console.log("p and shift pressed together");
    block_image_width+=10;
    block_image_Height+=10;
document.getElementById("CurrentWidth").innerHTML=block_image_width ;
document.getElementById("CurrentHeight").innerHTML=block_image_height;


   }
   }