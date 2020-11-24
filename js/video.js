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
	console.log(vid.currentTime)
	video.play()
});

document.querySelector("#mute").addEventListener("click", function(){
	var muteValue = document.getElementById("mute");
	var vid = document.getElementById("myVideo");
	if (muteValue.innerHTML === "Mute") {
		muteValue.innerHTML = "Unmute";
		vid.muted = true;
	} else {
		muteValue.innerHTML = "Mute";
		vid.muted = false;
	}
});

document.querySelector("#old").addEventListener("click", function(){
	classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function(){
	classList.remove("oldTime")
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(this);
	console.log(this.value);
});