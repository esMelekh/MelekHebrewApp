const cardsData = [
    {
        "image": "images/hello.png",
        "audio": "audio/1000/hello.mp3",
        "hebrew": "שלום",
        "translit": "Шалом",
        "meaning": "Привет"
    },
    {
        "image": "images/thank_you.png",
        "audio": "audio/1000/thank_you.mp3",
        "hebrew": "תודה",
        "translit": "Тода",
        "meaning": "Спасибо"
    },
    {
        "image": "images/morning.png",
        "audio": "audio/1000/morning.mp3",
        "hebrew": "בוקר",
        "translit": "Бокер",
        "meaning": "Утро"
    },
    {
        "image": "images/night.png",
        "audio": "audio/1000/night.mp3",
        "hebrew": "לילה",
        "translit": "Лайла",
        "meaning": "Ночь"
    },
    {
        "image": "images/water.png",
        "audio": "audio/1000/water.mp3",
        "hebrew": "מים",
        "translit": "Маем",
        "meaning": "Вода"
    },
    {
        "image": "images/food.png",
        "audio": "audio/1000/food.mp3",
        "hebrew": "אוכל",
        "translit": "Охель",
        "meaning": "Еда"
    },
    {
        "image": "images/book.png",
        "audio": "audio/1000/book.mp3",
        "hebrew": "ספר",
        "translit": "Сефер",
        "meaning": "Книга"
    },
    {
        "image": "images/chair.png",
        "audio": "audio/1000/chair.mp3",
        "hebrew": "כיסא",
        "translit": "Кисэ",
        "meaning": "Стул"
    },
    {
        "image": "images/sun.png",
        "audio": "audio/1000/sun.mp3",
        "hebrew": "שמש",
        "translit": "Шемеш",
        "meaning": "Солнце"
    },
    {
        "image": "images/boy.png",
        "audio": "audio/1000/boy.mp3",
        "hebrew": "ילד",
        "translit": "Елед",
        "meaning": "Мальчик"
    },
    {
        "image": "images/girl.png",
        "audio": "audio/1000/girl.mp3",
        "hebrew": "ילדה",
        "translit": "Ельда",
        "meaning": "Девочка"
    },
    {
        "image": "images/father.png",
        "audio": "audio/1000/father.mp3",
        "hebrew": "אבא",
        "translit": "Аба",
        "meaning": "Отец"
    },
    {
        "image": "images/mother.png",
        "audio": "audio/1000/mother.mp3",
        "hebrew": "אמא",
        "translit": "Има",
        "meaning": "Мать"
    },
    {
        "image": "images/brother.png",
        "audio": "audio/1000/brother.mp3",
        "hebrew": "אח",
        "translit": "Ах",
        "meaning": "Брат"
    },
    {
        "image": "images/sister.png",
        "audio": "audio/1000/sister.mp3",
        "hebrew": "אחות",
        "translit": "Ахот",
        "meaning": "Сестра"
    },
    {
        "image": "images/friend.png",
        "audio": "audio/1000/friend.mp3",
        "hebrew": "חבר",
        "translit": "Хавер",
        "meaning": "Друг"
    },
    {
        "image": "images/house.png",
        "audio": "audio/1000/house.mp3",
        "hebrew": "בית",
        "translit": "Байт",
        "meaning": "Дом"
    },
    {
        "image": "images/door.png",
        "audio": "audio/1000/door.mp3",
        "hebrew": "דלת",
        "translit": "Делет",
        "meaning": "Дверь"
    },
    {
        "image": "images/window.png",
        "audio": "audio/1000/window.mp3",
        "hebrew": "חלון",
        "translit": "Халон",
        "meaning": "Окно"
    },
    {
        "image": "images/tree.png",
        "audio": "audio/1000/tree.mp3",
        "hebrew": "עץ",
        "translit": "Эц",
        "meaning": "Дерево"
    },
        {
            "image": "images/dog.png",
            "audio": "audio/1000/dog.mp3",
            "hebrew": "כלב",
            "translit": "Келев",
            "meaning": "Собака"
        },
        {
            "image": "images/cat.png",
            "audio": "audio/1000/cat.mp3",
            "hebrew": "חתול",
            "translit": "Хатуль",
            "meaning": "Кот"
        },
        {
            "image": "images/sky.png",
            "audio": "audio/1000/sky.mp3",
            "hebrew": "שמיים",
            "translit": "Шамаим",
            "meaning": "Небо"
        },
        {
            "image": "images/earth.png",
            "audio": "audio/1000/earth.mp3",
            "hebrew": "אדמה",
            "translit": "Адама",
            "meaning": "Земля"
        },
        {
            "image": "images/fire.png",
            "audio": "audio/1000/fire.mp3",
            "hebrew": "אש",
            "translit": "Эш",
            "meaning": "Огонь"
        },
        {
            "image": "images/moon.png",
            "audio": "audio/1000/moon.mp3",
            "hebrew": "ירח",
            "translit": "Яреах",
            "meaning": "Луна"
        },
        {
            "image": "images/star.png",
            "audio": "audio/1000/star.mp3",
            "hebrew": "כוכב",
            "translit": "Кохав",
            "meaning": "Звезда"
        },
        {
            "image": "images/table.png",
            "audio": "audio/1000/table.mp3",
            "hebrew": "שולחן",
            "translit": "Шульхан",
            "meaning": "Стол"
        },
        {
            "image": "images/chair.png",
            "audio": "audio/1000/chair.mp3",
            "hebrew": "כיסא",
            "translit": "Кисэ",
            "meaning": "Стул"
        },
        {
            "image": "images/book.png",
            "audio": "audio/1000/book.mp3",
            "hebrew": "ספר",
            "translit": "Сефер",
            "meaning": "Книга"
        },
        {
            "image": "images/notebook.png",
            "audio": "audio/1000/notebook.mp3",
            "hebrew": "מחברת",
            "translit": "Махберет",
            "meaning": "Тетрадь"
        },
        {
            "image": "images/pen.png",
            "audio": "audio/1000/pen.mp3",
            "hebrew": "עט",
            "translit": "Эт",
            "meaning": "Ручка"
        },
        {
            "image": "images/pencil.png",
            "audio": "audio/1000/pencil.mp3",
            "hebrew": "עיפרון",
            "translit": "Ипарон",
            "meaning": "Карандаш"
        },
        {
            "image": "images/eraser.png",
            "audio": "audio/1000/eraser.mp3",
            "hebrew": "מחק",
            "translit": "Махак",
            "meaning": "Ластик"
        },
        {
            "image": "images/day.png",
            "audio": "audio/1000/day.mp3",
            "hebrew": "יום",
            "translit": "Йом",
            "meaning": "День"
        },
        {
            "image": "images/night.png",
            "audio": "audio/1000/night.mp3",
            "hebrew": "לילה",
            "translit": "Лайла",
            "meaning": "Ночь"
        },
        {
            "image": "images/morning.png",
            "audio": "audio/1000/morning.mp3",
            "hebrew": "בוקר",
            "translit": "Бокер",
            "meaning": "Утро"
        },
        {
            "image": "images/evening.png",
            "audio": "audio/1000/evening.mp3",
            "hebrew": "ערב",
            "translit": "Эрев",
            "meaning": "Вечер"
        },
        {
            "image": "images/week.png",
            "audio": "audio/1000/week.mp3",
            "hebrew": "שבוע",
            "translit": "Шавуа",
            "meaning": "Неделя"
        },
        {
            "image": "images/month.png",
            "audio": "audio/1000/month.mp3",
            "hebrew": "חודש",
            "translit": "Ходеш",
            "meaning": "Месяц"
        },
        {
            "image": "images/year.png",
            "audio": "audio/1000/year.mp3",
            "hebrew": "שנה",
            "translit": "Шана",
            "meaning": "Год"
        },
        {
            "image": "images/now.png",
            "audio": "audio/1000/now.mp3",
            "hebrew": "עכשיו",
            "translit": "Ахшав",
            "meaning": "Сейчас"
        },
        {
            "image": "images/tomorrow.png",
            "audio": "audio/1000/tomorrow.mp3",
            "hebrew": "מחר",
            "translit": "Махар",
            "meaning": "Завтра"
        },
        {
            "image": "images/yesterday.png",
            "audio": "audio/1000/yesterday.mp3",
            "hebrew": "אתמול",
            "translit": "Этмоль",
            "meaning": "Вчера"
        },
            {
                "image": "images/always.png",
                "audio": "audio/1000/always.mp3",
                "hebrew": "תמיד",
                "translit": "Тамид",
                "meaning": "Всегда"
            },
            {
                "image": "images/sometimes.png",
                "audio": "audio/1000/sometimes.mp3",
                "hebrew": "לפעמים",
                "translit": "Лефамим",
                "meaning": "Иногда"
            },
            {
                "image": "images/never.png",
                "audio": "audio/1000/never.mp3",
                "hebrew": "אף פעם",
                "translit": "Аф паам",
                "meaning": "Никогда"
            },
            {
                "image": "images/good.png",
                "audio": "audio/1000/good.mp3",
                "hebrew": "טוב",
                "translit": "Тов",
                "meaning": "Хорошо"
            },
            {
                "image": "images/bad.png",
                "audio": "audio/1000/bad.mp3",
                "hebrew": "רע",
                "translit": "Ра",
                "meaning": "Плохо"
            },
            {
                "image": "images/new.png",
                "audio": "audio/1000/new.mp3",
                "hebrew": "חדש",
                "translit": "Хадаш",
                "meaning": "Новый"
            },
            {
                "image": "images/old.png",
                "audio": "audio/1000/old.mp3",
                "hebrew": "ישן",
                "translit": "Яшан",
                "meaning": "Старый"
            },
            {
                "image": "images/big.png",
                "audio": "audio/1000/big.mp3",
                "hebrew": "גדול",
                "translit": "Гадоль",
                "meaning": "Большой"
            },
            {
                "image": "images/small.png",
                "audio": "audio/1000/small.mp3",
                "hebrew": "קטן",
                "translit": "Катан",
                "meaning": "Маленький"
            },
            {
                "image": "images/light.png",
                "audio": "audio/1000/light.mp3",
                "hebrew": "קל",
                "translit": "Каль",
                "meaning": "Лёгкий"
            },
            {
                "image": "images/heavy.png",
                "audio": "audio/1000/heavy.mp3",
                "hebrew": "כבד",
                "translit": "Кавед",
                "meaning": "Тяжёлый"
            },
            {
                "image": "images/fast.png",
                "audio": "audio/1000/fast.mp3",
                "hebrew": "מהיר",
                "translit": "Махир",
                "meaning": "Быстрый"
            },
            {
                "image": "images/slow.png",
                "audio": "audio/1000/slow.mp3",
                "hebrew": "איטי",
                "translit": "Ити",
                "meaning": "Медленный"
            },
            {
                "image": "images/hot.png",
                "audio": "audio/1000/hot.mp3",
                "hebrew": "חם",
                "translit": "Хам",
                "meaning": "Горячий"
            },
            {
                "image": "images/cold.png",
                "audio": "audio/1000/cold.mp3",
                "hebrew": "קר",
                "translit": "Кар",
                "meaning": "Холодный"
            },
            {
                "image": "images/right.png",
                "audio": "audio/1000/right.mp3",
                "hebrew": "נכון",
                "translit": "Нахон",
                "meaning": "Правильный"
            },
            {
                "image": "images/wrong.png",
                "audio": "audio/1000/wrong.mp3",
                "hebrew": "לא נכון",
                "translit": "Ло нахон",
                "meaning": "Неправильный"
            },
            {
                "image": "images/easy.png",
                "audio": "audio/1000/easy.mp3",
                "hebrew": "קל",
                "translit": "Каль",
                "meaning": "Простой"
            },
            {
                "image": "images/difficult.png",
                "audio": "audio/1000/difficult.mp3",
                "hebrew": "קשה",
                "translit": "Каше",
                "meaning": "Сложный"
            },
            {
                "image": "images/happy.png",
                "audio": "audio/1000/happy.mp3",
                "hebrew": "שמח",
                "translit": "Самеах",
                "meaning": "Счастливый"
            },
            {
                "image": "images/sad.png",
                "audio": "audio/1000/sad.mp3",
                "hebrew": "עצוב",
                "translit": "Ацув",
                "meaning": "Грустный"
            },
            {
                "image": "images/full.png",
                "audio": "audio/1000/full.mp3",
                "hebrew": "מלא",
                "translit": "Мале",
                "meaning": "Полный"
            },
            {
                "image": "images/empty.png",
                "audio": "audio/1000/empty.mp3",
                "hebrew": "ריק",
                "translit": "Рик",
                "meaning": "Пустой"
            },
            {
                "image": "images/clean.png",
                "audio": "audio/1000/clean.mp3",
                "hebrew": "נקי",
                "translit": "Наки",
                "meaning": "Чистый"
            },
            {
                "image": "images/dirty.png",
                "audio": "audio/1000/dirty.mp3",
                "hebrew": "מלוכלך",
                "translit": "Мелухлах",
                "meaning": "Грязный"
            },
    
                {
                    "image": "images/strong.png",
                    "audio": "audio/1000/strong.mp3",
                    "hebrew": "חזק",
                    "translit": "Хазак",
                    "meaning": "Сильный"
                },
                {
                    "image": "images/weak.png",
                    "audio": "audio/1000/weak.mp3",
                    "hebrew": "חלש",
                    "translit": "Халаш",
                    "meaning": "Слабый"
                },
                {
                    "image": "images/rich.png",
                    "audio": "audio/1000/rich.mp3",
                    "hebrew": "עשיר",
                    "translit": "Ашир",
                    "meaning": "Богатый"
                },
                {
                    "image": "images/poor.png",
                    "audio": "audio/1000/poor.mp3",
                    "hebrew": "עני",
                    "translit": "Ани",
                    "meaning": "Бедный"
                },
                {
                    "image": "images/beautiful.png",
                    "audio": "audio/1000/beautiful.mp3",
                    "hebrew": "יפה",
                    "translit": "Яфе",
                    "meaning": "Красивый"
                },
                {
                    "image": "images/ugly.png",
                    "audio": "audio/1000/ugly.mp3",
                    "hebrew": "מכוער",
                    "translit": "Мехоар",
                    "meaning": "Некрасивый"
                },
                {
                    "image": "images/young.png",
                    "audio": "audio/1000/young.mp3",
                    "hebrew": "צעיר",
                    "translit": "Цаир",
                    "meaning": "Молодой"
                },
                {
                    "image": "images/old_person.png",
                    "audio": "audio/1000/old_person.mp3",
                    "hebrew": "זקן",
                    "translit": "Закен",
                    "meaning": "Старый (человек)"
                },
                {
                    "image": "images/busy.png",
                    "audio": "audio/1000/busy.mp3",
                    "hebrew": "עסוק",
                    "translit": "Асук",
                    "meaning": "Занятый"
                },
                {
                    "image": "images/free.png",
                    "audio": "audio/1000/free.mp3",
                    "hebrew": "פנוי",
                    "translit": "Пануй",
                    "meaning": "Свободный"
                },
                {
                    "image": "images/hungry.png",
                    "audio": "audio/1000/hungry.mp3",
                    "hebrew": "רעב",
                    "translit": "Раэв",
                    "meaning": "Голодный"
                },
                {
                    "image": "images/thirsty.png",
                    "audio": "audio/1000/thirsty.mp3",
                    "hebrew": "צמא",
                    "translit": "Цаме",
                    "meaning": "Жаждущий"
                },
                {
                    "image": "images/tired.png",
                    "audio": "audio/1000/tired.mp3",
                    "hebrew": "עייף",
                    "translit": "Аеф",
                    "meaning": "Уставший"
                },
                {
                    "image": "images/healthy.png",
                    "audio": "audio/1000/healthy.mp3",
                    "hebrew": "בריא",
                    "translit": "Бари",
                    "meaning": "Здоровый"
                },
                {
                    "image": "images/sick.png",
                    "audio": "audio/1000/sick.mp3",
                    "hebrew": "חולה",
                    "translit": "Холе",
                    "meaning": "Больной"
                },
                {
                    "image": "images/happy_person.png",
                    "audio": "audio/1000/happy_person.mp3",
                    "hebrew": "מאושר",
                    "translit": "Меушар",
                    "meaning": "Счастливый (человек)"
                },
                {
                    "image": "images/angry.png",
                    "audio": "audio/1000/angry.mp3",
                    "hebrew": "כועס",
                    "translit": "Коэс",
                    "meaning": "Злой"
                },
                {
                    "image": "images/smart.png",
                    "audio": "audio/1000/smart.mp3",
                    "hebrew": "חכם",
                    "translit": "Хахам",
                    "meaning": "Умный"
                },
                {
                    "image": "images/stupid.png",
                    "audio": "audio/1000/stupid.mp3",
                    "hebrew": "טיפש",
                    "translit": "Типеш",
                    "meaning": "Глупый"
                },
                {
                    "image": "images/clean.png",
                    "audio": "audio/1000/clean.mp3",
                    "hebrew": "נקי",
                    "translit": "Наки",
                    "meaning": "Чистый"
                },
                {
                    "image": "images/dirty.png",
                    "audio": "audio/1000/dirty.mp3",
                    "hebrew": "מלוכלך",
                    "translit": "Мелухлах",
                    "meaning": "Грязный"
                },
                {
                    "image": "images/full.png",
                    "audio": "audio/1000/full.mp3",
                    "hebrew": "מלא",
                    "translit": "Мале",
                    "meaning": "Полный"
                },
                {
                    "image": "images/empty.png",
                    "audio": "audio/1000/empty.mp3",
                    "hebrew": "ריק",
                    "translit": "Рик",
                    "meaning": "Пустой"
                },
                {
                    "image": "images/near.png",
                    "audio": "audio/1000/near.mp3",
                    "hebrew": "קרוב",
                    "translit": "Каров",
                    "meaning": "Близко"
                },
                {
                    "image": "images/far.png",
                    "audio": "audio/1000/far.mp3",
                    "hebrew": "רחוק",
                    "translit": "Рахок",
                    "meaning": "Далеко"
                },
                    {
                        "image": "images/before.png",
                        "audio": "audio/1000/before.mp3",
                        "hebrew": "לפני",
                        "translit": "Лифней",
                        "meaning": "До"
                    },
                    {
                        "image": "images/after.png",
                        "audio": "audio/1000/after.mp3",
                        "hebrew": "אחרי",
                        "translit": "Ахарей",
                        "meaning": "После"
                    },
                    {
                        "image": "images/inside.png",
                        "audio": "audio/1000/inside.mp3",
                        "hebrew": "בתוך",
                        "translit": "Бетох",
                        "meaning": "Внутри"
                    },
                    {
                        "image": "images/outside.png",
                        "audio": "audio/1000/outside.mp3",
                        "hebrew": "מחוץ",
                        "translit": "Мехуц",
                        "meaning": "Снаружи"
                    },
                    {
                        "image": "images/above.png",
                        "audio": "audio/1000/above.mp3",
                        "hebrew": "מעל",
                        "translit": "Меаль",
                        "meaning": "Над"
                    },
                    {
                        "image": "images/below.png",
                        "audio": "audio/1000/below.mp3",
                        "hebrew": "מתחת",
                        "translit": "Митахат",
                        "meaning": "Под"
                    },
                    {
                        "image": "images/with.png",
                        "audio": "audio/1000/with.mp3",
                        "hebrew": "עם",
                        "translit": "Им",
                        "meaning": "С"
                    },
                    {
                        "image": "images/without.png",
                        "audio": "audio/1000/without.mp3",
                        "hebrew": "בלי",
                        "translit": "Бли",
                        "meaning": "Без"
                    },
                    {
                        "image": "images/left.png",
                        "audio": "audio/1000/left.mp3",
                        "hebrew": "שמאל",
                        "translit": "Смоль",
                        "meaning": "Лево"
                    },
                    {
                        "image": "images/right.png",
                        "audio": "audio/1000/right.mp3",
                        "hebrew": "ימין",
                        "translit": "Ямин",
                        "meaning": "Право"
                    },
                    {
                        "image": "images/here.png",
                        "audio": "audio/1000/here.mp3",
                        "hebrew": "כאן",
                        "translit": "Кан",
                        "meaning": "Здесь"
                    },
                    {
                        "image": "images/there.png",
                        "audio": "audio/1000/there.mp3",
                        "hebrew": "שם",
                        "translit": "Шам",
                        "meaning": "Там"
                    },
                    {
                        "image": "images/everywhere.png",
                        "audio": "audio/1000/everywhere.mp3",
                        "hebrew": "בכל מקום",
                        "translit": "Бехоль маком",
                        "meaning": "Повсюду"
                    },
                    {
                        "image": "images/somewhere.png",
                        "audio": "audio/1000/somewhere.mp3",
                        "hebrew": "במקום כלשהו",
                        "translit": "Бемаком кальшеу",
                        "meaning": "Где-то"
                    },
                    {
                        "image": "images/nowhere.png",
                        "audio": "audio/1000/nowhere.mp3",
                        "hebrew": "שום מקום",
                        "translit": "Шум маком",
                        "meaning": "Нигде"
                    },
                    {
                        "image": "images/yes.png",
                        "audio": "audio/1000/yes.mp3",
                        "hebrew": "כן",
                        "translit": "Кен",
                        "meaning": "Да"
                    },
                    {
                        "image": "images/no.png",
                        "audio": "audio/1000/no.mp3",
                        "hebrew": "לא",
                        "translit": "Ло",
                        "meaning": "Нет"
                    },
                    {
                        "image": "images/who.png",
                        "audio": "audio/1000/who.mp3",
                        "hebrew": "מי",
                        "translit": "Ми",
                        "meaning": "Кто"
                    },
                    {
                        "image": "images/what.png",
                        "audio": "audio/1000/what.mp3",
                        "hebrew": "מה",
                        "translit": "Ма",
                        "meaning": "Что"
                    },
                    {
                        "image": "images/where.png",
                        "audio": "audio/1000/where.mp3",
                        "hebrew": "איפה",
                        "translit": "Эйфо",
                        "meaning": "Где"
                    },
                    {
                        "image": "images/why.png",
                        "audio": "audio/1000/why.mp3",
                        "hebrew": "למה",
                        "translit": "Лама",
                        "meaning": "Почему"
                    },
                    {
                        "image": "images/how.png",
                        "audio": "audio/1000/how.mp3",
                        "hebrew": "איך",
                        "translit": "Эйх",
                        "meaning": "Как"
                    },
                    {
                        "image": "images/when.png",
                        "audio": "audio/1000/when.mp3",
                        "hebrew": "מתי",
                        "translit": "Матай",
                        "meaning": "Когда"
                    },
                    {
                        "image": "images/how_much.png",
                        "audio": "audio/1000/how_much.mp3",
                        "hebrew": "כמה",
                        "translit": "Кама",
                        "meaning": "Сколько"
                    },
                   
                        {
                            "image": "images/man.png",
                            "audio": "audio/1000/man.mp3",
                            "hebrew": "איש",
                            "translit": "Иш",
                            "meaning": "Мужчина"
                        },
                        {
                            "image": "images/woman.png",
                            "audio": "audio/1000/woman.mp3",
                            "hebrew": "אישה",
                            "translit": "Иша",
                            "meaning": "Женщина"
                        },
                        {
                            "image": "images/boy.png",
                            "audio": "audio/1000/boy.mp3",
                            "hebrew": "ילד",
                            "translit": "Елед",
                            "meaning": "Мальчик"
                        },
                        {
                            "image": "images/girl.png",
                            "audio": "audio/1000/girl.mp3",
                            "hebrew": "ילדה",
                            "translit": "Яльда",
                            "meaning": "Девочка"
                        },
                        {
                            "image": "images/father.png",
                            "audio": "audio/1000/father.mp3",
                            "hebrew": "אבא",
                            "translit": "Аба",
                            "meaning": "Отец"
                        },
                        {
                            "image": "images/mother.png",
                            "audio": "audio/1000/mother.mp3",
                            "hebrew": "אמא",
                            "translit": "Има",
                            "meaning": "Мать"
                        },
                        {
                            "image": "images/brother.png",
                            "audio": "audio/1000/brother.mp3",
                            "hebrew": "אח",
                            "translit": "Ах",
                            "meaning": "Брат"
                        },
                        {
                            "image": "images/sister.png",
                            "audio": "audio/1000/sister.mp3",
                            "hebrew": "אחות",
                            "translit": "Ахот",
                            "meaning": "Сестра"
                        },
                        {
                            "image": "images/friend.png",
                            "audio": "audio/1000/friend.mp3",
                            "hebrew": "חבר",
                            "translit": "Хавер",
                            "meaning": "Друг"
                        },
                        {
                            "image": "images/enemy.png",
                            "audio": "audio/1000/enemy.mp3",
                            "hebrew": "אויב",
                            "translit": "Ойев",
                            "meaning": "Враг"
                        },
                        {
                            "image": "images/teacher.png",
                            "audio": "audio/1000/teacher.mp3",
                            "hebrew": "מורה",
                            "translit": "Море",
                            "meaning": "Учитель"
                        },
                        {
                            "image": "images/student.png",
                            "audio": "audio/1000/student.mp3",
                            "hebrew": "תלמיד",
                            "translit": "Тальмид",
                            "meaning": "Ученик"
                        },
                        {
                            "image": "images/doctor.png",
                            "audio": "audio/1000/doctor.mp3",
                            "hebrew": "רופא",
                            "translit": "Рофэ",
                            "meaning": "Доктор"
                        },
                        {
                            "image": "images/nurse.png",
                            "audio": "audio/1000/nurse.mp3",
                            "hebrew": "אחות",
                            "translit": "Ахот",
                            "meaning": "Медсестра"
                        },
                        {
                            "image": "images/police_officer.png",
                            "audio": "audio/1000/police_officer.mp3",
                            "hebrew": "שוטר",
                            "translit": "Шотер",
                            "meaning": "Полицейский"
                        },
                        {
                            "image": "images/soldier.png",
                            "audio": "audio/1000/soldier.mp3",
                            "hebrew": "חייל",
                            "translit": "Хаяль",
                            "meaning": "Солдат"
                        },
                        {
                            "image": "images/farmer.png",
                            "audio": "audio/1000/farmer.mp3",
                            "hebrew": "חקלאי",
                            "translit": "Хаклай",
                            "meaning": "Фермер"
                        },
                        {
                            "image": "images/pilot.png",
                            "audio": "audio/1000/pilot.mp3",
                            "hebrew": "טייס",
                            "translit": "Таяс",
                            "meaning": "Пилот"
                        },
                        {
                            "image": "images/driver.png",
                            "audio": "audio/1000/driver.mp3",
                            "hebrew": "נהג",
                            "translit": "Наhаг",
                            "meaning": "Водитель"
                        },
                        {
                            "image": "images/chef.png",
                            "audio": "audio/1000/chef.mp3",
                            "hebrew": "שף",
                            "translit": "Шеф",
                            "meaning": "Шеф-повар"
                        },
                        {
                            "image": "images/artist.png",
                            "audio": "audio/1000/artist.mp3",
                            "hebrew": "אמן",
                            "translit": "Аман",
                            "meaning": "Художник"
                        },
                        {
                            "image": "images/musician.png",
                            "audio": "audio/1000/musician.mp3",
                            "hebrew": "מוזיקאי",
                            "translit": "Музикай",
                            "meaning": "Музыкант"
                        },
                        {
                            "image": "images/dancer.png",
                            "audio": "audio/1000/dancer.mp3",
                            "hebrew": "רקדן",
                            "translit": "Ракдан",
                            "meaning": "Танцор"
                        },
                        {
                            "image": "images/singer.png",
                            "audio": "audio/1000/singer.mp3",
                            "hebrew": "זמר",
                            "translit": "Замар",
                            "meaning": "Певец"
                        },
                        {
                            "image": "images/writer.png",
                            "audio": "audio/1000/writer.mp3",
                            "hebrew": "סופר",
                            "translit": "Софер",
                            "meaning": "Писатель"
                        }
                    
];


let currentIndex = 0;

function loadWord(index) {
    const word = cardsData[index];
    document.getElementById('wordImage').src = word.image;
    document.getElementById('hebrewText').textContent = word.hebrew;
    document.getElementById('translitText').textContent = word.translit;
    document.getElementById('meaningText').textContent = word.meaning;
}

function playAudio() {
    const audio = new Audio(cardsData[currentIndex].audio);
    audio.play();
}

function nextWord() {
    if (currentIndex < cardsData.length - 1) {
        currentIndex++;
        resetFlips();
        loadWord(currentIndex);
    }
}

function prevWord() {
    if (currentIndex > 0) {
        currentIndex--;
        resetFlips();
        loadWord(currentIndex);
    }
}

function flipDetail(card, type) {
    card.classList.toggle('is-flipped');
}

function resetFlips() {
    document.querySelectorAll('.detail-card').forEach(card => {
        card.classList.remove('is-flipped');
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => loadWord(currentIndex));
