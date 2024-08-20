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

function isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || (window.innerWidth <= 800 && window.innerHeight <= 600);
}

function triggerVirusEffect(videoSrc) {
    const container = document.getElementById('video-container');
    container.innerHTML = '';
    container.classList.remove('hidden');

    if (isMobile()) {
        // Play a single video for mobile devices
        const video = document.createElement('video');
        video.src = videoSrc;
        video.autoplay = true;
        video.loop = true;
        video.volume = 1.0; // Maximum volume
        video.playsInline = true; // Prevents full-screen on iOS
        video.classList.add('fullscreen-video');
        video.style.top = '0';
        video.style.left = '0';
        video.style.width = '100%';
        video.style.height = '100%';
        container.appendChild(video);
        video.play();
    } else {
        // Play a 5x5 grid of videos for non-mobile devices
        const rows = 5;
        const cols = 5;
        const totalVideos = rows * cols;

        for (let i = 0; i < totalVideos; i++) {
            requestAnimationFrame(() => {
                const video = document.createElement('video');
                video.src = videoSrc;
                video.autoplay = true;
                video.loop = true;
                video.volume = 1.0; // Maximum volume
                video.playsInline = true; // Prevents full-screen on iOS
                video.classList.add('fullscreen-video');
                video.style.top = `${Math.floor(i / cols) * 20}%`;
                video.style.left = `${(i % cols) * 20}%`;
                container.appendChild(video);
                video.play();
            });
        }
    }
}