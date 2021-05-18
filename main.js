var canvas=new fabric.Canvas('myCanvas');


width=30;
height=30;


player_x=10;
player_y=10;

player_object="";
block_image_object="";

function player_update(){
    fabric.Image.fromURL("player(1).png",function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });

}
function new_image(get_image){
fabric.Image.fromURL(get_image,function(Img){
 block_image_object=Tmg;

 block_image_object.scaleToWidth(width);
 block_image_object.scaleToHeight(height);
 block_image_object.set({
     top:player_y,
     left:player_x
 });
 canvas.add(block_image_object)
});
}
