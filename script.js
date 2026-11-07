// База карточек для всех разделов
const flashcardData = {
    '1-chelovek': [
        { q: "Что такое человек?", a: "Биосоциальное существо, обладающее мышлением, речью, способностью создавать орудия труда." },
        { q: "Чем индивид отличается от личности?", a: "Индивид — единичный представитель рода (биология). Личность — субъект социальных отношений (социум)." },
        { q: "Статья 2 Конституции РФ?", a: "Человек, его права и свободы являются высшей ценностью." },
        { q: "Назови биологическое в человеке", a: "Анатомия, физиология, инстинкты, базовые эмоции." }
    ],
    '2-mirovozzrenie': [
        { q: "Что такое мировоззрение?", a: "Система взглядов человека на мир и своё место в нём." },
        { q: "Типы мировоззрения?", a: "Обыденное, религиозное, философское, научное." },
        { q: "Статья 13 Конституции РФ (кратко)?", a: "Признается идеологическое многообразие. Никакая идеология не может быть государственной." }
    ],
    '3-deyatelnost': [
        { q: "Структура деятельности?", a: "Субъект → объект → цель → мотив → средства → действия → результат." },
        { q: "Виды деятельности?", a: "Игра, учение, труд, общение." },
        { q: "Что такое свобода?", a: "Возможность действовать в соответствии со своими целями на основе познания необходимости." }
    ],
    '4-poznanie': [
        { q: "Уровни познания?", a: "Чувственное (ощущение, восприятие, представление) и рациональное (понятие, суждение, умозаключение)." },
        { q: "Абсолютная истина?", a: "Полное, исчерпывающее знание о предмете." },
        { q: "Главный критерий истины?", a: "Практика." }
    ],
    '5-obschestvo': [
        { q: "Сферы общества?", a: "Экономическая, социальная, политическая, духовная." },
        { q: "Что такое социальный институт?", a: "Исторически сложившаяся устойчивая форма организации совместной деятельности людей." },
        { q: "Статья 38 Конституции РФ?", a: "Материнство и детство, семья находятся под защитой государства." }
    ],
    '6-kultura': [
        { q: "Формы культуры?", a: "Народная, массовая, элитарная." },
        { q: "Особенности науки?", a: "Объективность, системность, доказательность, проверяемость, рациональность." },
        { q: "Статья 14 Конституции РФ?", a: "Российская Федерация — светское государство. Никакая религия не может быть государственной." },
        { q: "Функции искусства?", a: "Эстетическая, познавательная, воспитательная, коммуникативная, гедонистическая." }
    ],
    '7-progress': [
        { q: "Типы обществ?", a: "Традиционное, индустриальное, постиндустриальное (информационное)." },
        { q: "Что такое глобализация?", a: "Усиление взаимосвязи и взаимозависимости стран и народов." },
        { q: "Глобальные проблемы?", a: "Экологические, демографические, угроза войны, разрыв Север–Юг, пандемии." }
    ]
};

// Логика для страниц с карточками
document.addEventListener('DOMContentLoaded', () => {
    const flashcardBtn = document.getElementById('start-flashcards');
    if (!flashcardBtn) return; // Если мы не на странице с карточками, выходим

    const sectionId = flashcardBtn.dataset.section;
    const cards = flashcardData[sectionId] || [];
    let currentIndex = 0;

    const modal = document.getElementById('flashcard-modal');
    const qText = document.getElementById('fc-question');
    const aText = document.getElementById('fc-answer');
    const btnReveal = document.getElementById('fc-reveal');
    const btnNext = document.getElementById('fc-next');
    const closeBtn = document.querySelector('.close-modal');

    function loadCard() {
        if (cards.length === 0) return;
        qText.textContent = cards[currentIndex].q;
        aText.textContent = cards[currentIndex].a;
        aText.classList.remove('show');
        btnReveal.style.display = 'inline-block';
        btnNext.style.display = 'none';
    }

    flashcardBtn.addEventListener('click', () => {
        currentIndex = 0;
        loadCard();
        modal.classList.add('active');
    });

    btnReveal.addEventListener('click', () => {
        aText.classList.add('show');
        btnReveal.style.display = 'none';
        btnNext.style.display = 'inline-block';
    });

    btnNext.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= cards.length) {
            currentIndex = 0; // По кругу
        }
        loadCard();
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Закрытие по клику вне окна
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });
});