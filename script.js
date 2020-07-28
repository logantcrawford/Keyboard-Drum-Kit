function handle_samples(event) {
    const sample = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if (!sample) return;
    sample.currentTime = 0;
    sample.play();
}
window.addEventListener('keydown', handle_samples);