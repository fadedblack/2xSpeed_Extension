chrome.storage.local.get(['speed'], (result) => {
    const speed = result.speed || 1.0;
    applySpeedToVideo(speed);
});

function applySpeedToVideo(speed) {
    const intervalId = setInterval(() => {
        const video = document.querySelector('video');
        if (video) {
            video.playbackRate = speed;
            clearInterval(intervalId); 
        }
    }, 1000);
}