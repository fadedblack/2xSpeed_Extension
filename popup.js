// Load saved speed when popup opens
chrome.storage.local.get(['speed'], (result) => {
  const savedSpeed = result.speed || 1.0;
  document.getElementById("numberInput").value = savedSpeed;
  document.getElementById("speedValue").textContent = savedSpeed;
});

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

  chrome.storage.local.set({ speed });

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    function: updatePlaybackSpeed,
    args: [speed],
  });
});

const updatePlaybackSpeed = (speed) => {
  const videos = document.querySelectorAll("video");

  if (videos.length > 0) {
    videos.forEach((video) => {
      video.playbackRate = speed;
    });
    return true;
  }
  return false;
};

const isAValidPlaybackSpeed = (speed) => {
  return speed >= 0.25 && speed <= 4;
};
