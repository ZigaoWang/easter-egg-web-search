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
        triggerVirusEffect('rickroll-container', 'assets/rickroll.mp4');
    } else if (whistleKeywords.some(keyword => searchInput.includes(keyword))) {
        triggerVirusEffect('whistle-container', 'https://assets.zigao.wang/img/whistle.mp4');
    } else {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchInput)}`;
    }
}

function triggerVirusEffect(containerId, videoSrc) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    const video = document.createElement('video');
    video.src = videoSrc;
    video.autoplay = true;
    video.loop = true;
    video.volume = 1.0; // Maximum volume
    video.classList.add('fullscreen-video');

    container.appendChild(video);
    container.classList.remove('hidden');

    for (let i = 1; i < 50; i++) {
        setTimeout(() => {
            const clone = video.cloneNode(true);
            clone.volume = 1.0; // Maximum volume for each clone
            clone.style.transform = `rotate(${Math.random() * 360}deg) scale(${Math.random() * 1.5 + 0.5})`;
            clone.style.left = `${Math.random() * 100}%`;
            clone.style.top = `${Math.random() * 100}%`;
            container.appendChild(clone);
        }, i); // Rapid succession
    }
}