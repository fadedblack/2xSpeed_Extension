document.getElementById("numberInput").addEventListener("input", () => {
  const speed = parseFloat(document.getElementById("numberInput").value);
  document.getElementById("speedValue").textContent = speed;
});

document.getElementById("numberInput").addEventListener("change", async () => {
  const speed = parseFloat(document.getElementById("numberInput").value);
  document.getElementById("speedValue").textContent = speed;
  
  if (!isAValidPlaybackSpeed(speed)) {
    alert("Please enter a number between 0.25 and 4");
    document.getElementById("numberInput").value = 1;
    document.getElementById("speedValue").textContent = 1;
    return;
  }

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: updatePlaybackSpeed,
    args: [speed]
  });
});

const updatePlaybackSpeed = (speed) => {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.playbackRate = speed;
  });
}

const isAValidPlaybackSpeed = (speed) => {
  return speed >= 0.25 && speed <= 4;
}
