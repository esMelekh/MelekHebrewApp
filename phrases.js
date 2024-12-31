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

const phraseCard = document.getElementById('phraseCard');
const phraseFront = document.getElementById('phraseFront');
const phraseBack = document.getElementById('phraseBack');
const audio = new Audio();

// Функция загрузки текущей фразы
function loadPhrase() {
    const currentPhrase = phrases[currentIndex];
    phraseFront.textContent = `${currentPhrase.phrase} (${currentPhrase.transliteration})`;
    phraseBack.textContent = currentPhrase.translation;
    phraseCard.classList.remove('is-flipped'); // Убираем переворот
    audio.src = currentPhrase.audio;
}

// Переворот карточки
phraseCard.addEventListener('click', () => {
    phraseCard.classList.toggle('is-flipped');
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

