document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const songList = document.getElementById('songList');
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('playPauseButton');
    const songTitle = document.getElementById('songTitle');
    const transcription = document.getElementById('transcription');
    const translation = document.getElementById('translation');
    let subtitleData = [];
    let subtitleInterval;

    async function loadSongs() {
        try {
            const response = await fetch('songs.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const songs = await response.json();

            if (songList) {
                songList.innerHTML = ''; // Очищаем список

                songs.forEach((song) => {
                    const li = document.createElement('li');
                    li.className = 'song-item';
                    li.textContent = song.title;
                    li.onclick = () => openPlayer(song.file, song.title, song.subtitles);
                    songList.appendChild(li);
                });
            } else {
                console.error('Element with id "songList" not found.');
            }
        } catch (error) {
            console.error('Ошибка загрузки списка песен:', error);
            alert('Не удалось загрузить список песен.');
        }
    }

    function openPlayer(songPath, title, subtitlesPath) {
        songList.style.display = 'none';
        player.style.display = 'flex';

        audio.src = songPath;
        songTitle.textContent = title;

        fetch(subtitlesPath)
            .then((response) => response.json())
            .then((subtitles) => {
                subtitleData = subtitles;
                transcription.textContent = '';
                translation.textContent = '';
            })
            .catch((error) => console.error('Ошибка загрузки субтитров:', error));

        audio.play().catch((error) => console.error('Ошибка воспроизведения аудио:', error));

        clearInterval(subtitleInterval);
        subtitleInterval = setInterval(() => updateSubtitles(audio.currentTime), 500);
    }

    function updateSubtitles(currentTime) {
        const currentSubtitle = subtitleData.find(
            (sub) =>
                currentTime >= sub.time &&
                currentTime < (subtitleData[subtitleData.indexOf(sub) + 1]?.time || Infinity)
        );

        if (currentSubtitle) {
            transcription.textContent = currentSubtitle.hebrew;
            translation.textContent = currentSubtitle.translation;
        }
    }

    function togglePlay() {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseButton.textContent = 'Play';
        }
    }

    function rewind() {
        audio.currentTime -= 5;
    }

    function forward() {
        audio.currentTime += 5;
    }

    audio.addEventListener('ended', () => {
        player.style.display = 'none';
        songList.style.display = 'block';
        clearInterval(subtitleInterval);
    });

    audio.onerror = () => {
        console.error('Ошибка загрузки аудиофайла:', audio.src);
        alert('Не удалось загрузить аудиофайл.');
    };

    loadSongs();
});
