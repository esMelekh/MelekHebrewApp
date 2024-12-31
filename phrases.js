// Список фраз
const phrases = [
    {
        phrase: "מה שלומך?",
        transliteration: "Ма шломха?",
        translation: "Как дела?",
        audio: "audio/phrase1.mp3"
    },
    {
        phrase: "תודה רבה",
        transliteration: "Тода раба",
        translation: "Большое спасибо",
        audio: "audio/phrase2.mp3"
    },
    {
        phrase: "סליחה",
        transliteration: "Слиха",
        translation: "Извините",
        audio: "audio/phrase3.mp3"
    }
];

let currentIndex = 0; // Индекс текущей фразы

const phraseElement = document.getElementById('phrase');
const translationElement = document.getElementById('translation');
const audio = new Audio();

// Функция загрузки текущей фразы
function loadPhrase() {
    const currentPhrase = phrases[currentIndex];
    phraseElement.textContent = `${currentPhrase.phrase} (${currentPhrase.transliteration})`;
    translationElement.style.display = 'none';
    audio.src = currentPhrase.audio;
}

// Показываем перевод
phraseElement.addEventListener('click', () => {
    const currentPhrase = phrases[currentIndex];
    translationElement.textContent = currentPhrase.translation;
    translationElement.style.display = 'block';
});

// Следующая фраза
function nextPhrase() {
    currentIndex = (currentIndex + 1) % phrases.length; // Циклический переход
    loadPhrase();
}

// Предыдущая фраза
function prevPhrase() {
    currentIndex = (currentIndex - 1 + phrases.length) % phrases.length; // Циклический переход
    loadPhrase();
}

// Воспроизведение аудио
function playAudio() {
    audio.play();
}

// Загружаем первую фразу при загрузке страницы
loadPhrase();
