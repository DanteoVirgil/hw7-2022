// var video = document.getElementsByClassName("video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	document.getElementById("mp4_src").src = "movie.mp4";
	document.getElementById("ogg_src").src = "movie.ogg";
	var video = document.getElementsByClassName("video");
	video.autoplay = false;
	document.getElementsByClassName("video").load();
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	var video = document.querySelector("video");
	var volume = video.volume;
	console.log(volume)
	video.onplay = video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	var video = document.querySelector("video");
	video.onplay = video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	var video = document.querySelector("video");
	video.playbackRate -= 0.1;
	console.log("New speed is:", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	var video = document.querySelector("video");
	video.playbackRate += 0.1;
	console.log("New speed is:", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip 10 seconds Ahead");
	var video = document.querySelector("video");
	video.currentTime += 10;
	console.log("New time:", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	var video = document.querySelector("video");
	if (video.muted) {
		video.muted = false;
		mute.innerText = "Mute";
	} 
	else {
		video.muted = true;
		mute.innerText = "Unmute";
	}
	console.log("Volume muted is:", video.muted);
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log(this);
	console.log(this.value);
	var video = document.querySelector("video");
	video.volume = (this.value)/100;
	document.querySelector('#volume').textContent=this.value + '%';
	// video.volume = this.value;
	// video.vol;
	// video.volume = this.value;
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log(this);
	var video = document.querySelector("video");
  	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log(this);
	var element = document.querySelector("video");
  	element.classList.remove("oldSchool");
});
