document.getElementById('search-button').addEventListener('click', function() {
    performSearch();
});

document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const rickrollKeywords = ["rick roll", "rick astley", "never gonna give you up"];
    const whistleKeywords = ["whistle", "josh", "josh hutcherson"];

    if (rickrollKeywords.some(keyword => searchInput.includes(keyword))) {
        triggerVirusEffect('assets/rickroll.mp4');
    } else if (whistleKeywords.some(keyword => searchInput.includes(keyword))) {
        triggerVirusEffect('assets/whistle.mp4');
    } else {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchInput)}`;
    }
}

function triggerVirusEffect(videoSrc) {
    const container = document.getElementById('video-container');
    container.innerHTML = '';
    container.classList.remove('hidden');

    const rows = 5;
    const cols = 5;
    const totalVideos = rows * cols;

    for (let i = 0; i < totalVideos; i++) {
        setTimeout(() => {
            const video = document.createElement('video');
            video.src = videoSrc;
            video.autoplay = true;
            video.loop = true;
            video.volume = 1.0; // Maximum volume
            video.classList.add('fullscreen-video');
            video.style.top = `${Math.floor(i / cols) * 20}%`;
            video.style.left = `${(i % cols) * 20}%`;
            container.appendChild(video);
            video.play();
        }, Math.random() * 500); // Different delay for each video
    }
}