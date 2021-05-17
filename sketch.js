var vid;
function setup() {
/*canvas=createCanvas(100,100);*/
vid=createVideo('video.mp4');
vid.size(500,500);
  vid.pos(0,0);
vid.loop();
//rect(10,10,10,10); 
}

