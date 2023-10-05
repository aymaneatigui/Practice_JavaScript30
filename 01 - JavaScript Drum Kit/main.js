window.addEventListener("keydown", (e) => {
    console.log(e)
  const key = e.key.toUpperCase().charCodeAt(0);
  const play_key = document.querySelector(`.key[data-key="${key}"]`);
  const audio_key = document.querySelector(`audio[data-key="${key}"]`)
  if (play_key != null && audio_key != null) {
    play_key.classList.add("playing");
    audio_key.currentTime = 0;
    audio_key.play()
    setTimeout(()=>{
        play_key.classList.remove("playing")
    },70)
  }
});
