noseX = 0;
noseY = 0;

function preload(){
clown_image = loadImage('https://i.postimg.cc/Xq9xQzTT/101-1014330-mostacho-png-download-document-display-resolution-snapchat-filters.png');

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log('poseNet is initialized');

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);

        noseX = results[0].pose.nose.x - 15;
        noseY = results[0].pose.nose.y - 7;
    }
}

function draw(){
image(video,0,0,300,300);


image(clown_image, noseX, noseY, 30, 30);

}

function take_snapshot(){
   save('myIilterImage.png'); 
}