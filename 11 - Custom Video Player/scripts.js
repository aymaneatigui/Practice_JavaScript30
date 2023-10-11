/* Get Our Elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

/* Build out functions */
const togglePlay = () => {
  video.paused ? video.play() : video.pause();
};
const updateButton = (e) => {
  const icon = e.target.paused
    ? '<i class="fa-solid fa-play"></i>'
    : '<i class="fa-solid fa-pause"></i>';
  toggle.innerHTML = icon;
};

const skip = (e) => {
  skipValue = e.target.dataset.skip;
  video.currentTime += parseFloat(skipValue);
};

function handelRange(e) {
  video[this.name] = this.value;
}

const handleProgress = (e) => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
};

const updateProgress = (e) => {
  video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
};

/* Hook up the event listeners */
video.addEventListener("timeupdate", handleProgress);

video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

skipButtons.forEach((skipBtn) => skipBtn.addEventListener("click", skip));

ranges.forEach((range) => range.addEventListener("click", handelRange));
ranges.forEach((range) => range.addEventListener("mousemove", handelRange));

let mousedown = false;
progress.addEventListener("click", updateProgress);
progress.addEventListener("mousemove", (e) => {
  mousedown && updateProgress(e);
});
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
