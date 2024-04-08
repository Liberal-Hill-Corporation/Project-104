Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:100
});

var camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id ="captured_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5version = ", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/I7S5Izm2E/',modelLoaded);
