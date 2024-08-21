document.addEventListener('DOMContentLoaded', () => {
    fetch('easter-eggs.json')
        .then(response => response.json())
        .then(data => {
            const easterEggs = data;

            document.getElementById('search-button').addEventListener('click', () => {
                performSearch(easterEggs);
            });

            document.getElementById('search-input').addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    performSearch(easterEggs);
                }
            });
        });
});

function performSearch(easterEggs) {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const matchedEgg = easterEggs.find(egg => egg.keywords.some(keyword => searchInput.includes(keyword)));

    if (matchedEgg) {
        triggerVirusEffect(matchedEgg.video);
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
        const video = document.createElement('video');
        video.src = videoSrc;
        video.autoplay = true;
        video.loop = true;
        video.volume = 1.0;
        video.playsInline = true;
        video.classList.add('fullscreen-video');
        video.style.top = '0';
        video.style.left = '0';
        video.style.width = '100%';
        video.style.height = '100%';
        container.appendChild(video);
        video.play();
    } else {
        const rows = 5;
        const cols = 5;
        const totalVideos = rows * cols;

        for (let i = 0; i < totalVideos; i++) {
            requestAnimationFrame(() => {
                const video = document.createElement('video');
                video.src = videoSrc;
                video.autoplay = true;
                video.loop = true;
                video.volume = 1.0;
                video.playsInline = true;
                video.classList.add('fullscreen-video');
                video.style.top = `${Math.floor(i / cols) * 20}%`;
                video.style.left = `${(i % cols) * 20}%`;
                container.appendChild(video);
                video.play();
            });
        }
    }
}