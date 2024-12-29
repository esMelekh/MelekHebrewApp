function openPlayer(audioFile, subtitleFile) {
    const audioElement = document.getElementById('audio-player');
    audioElement.src = `songs/${audioFile}`;

    // Загрузка субтитров
    fetch(`subtitles/${subtitleFile}`)
        .then(response => response.json())
        .then(subtitles => {
            currentSubtitles = subtitles;
            displaySubtitle(0); // Показать первую строку
        });

    // Показ плеера
    document.getElementById('song-list').style.display = 'none';
    document.getElementById('player').style.display = 'block';
}
