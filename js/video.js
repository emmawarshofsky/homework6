var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol= document.querySelector("#volume").innerHTML = (video.volume / 1) * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	var vid = document.getElementById("myVideo");
	vid.playbackRate = 0.9;
	console.log(vid.playbackspeed);
});

document.querySelector("#faster").addEventListener("click", function(){
	var vid = document.getElementById("myVideo");
	vid.playbackRate = 1.1;
	console.log(vid.playbackspeed);
});

document.querySelector("#skip").addEventListener("click", function(){
	var vid = document.getElementById("myVideo");
	vid.currentTime += 5;
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(this);
	console.log(this.value);
});