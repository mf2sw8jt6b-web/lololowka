// Сюжет новели. Кожен блок - це окрема сцена.
const story = {
    start: {
        character: "Лололошка",
        text: "Ох, цей річний звіт займає набагато більше часу, ніж я розраховував. Джоне, ти вже закінчив свою частину?",
        nameColor: "#4fc3f7", // Блакитний колір для Лололошки
        choices: [
            { text: "Подивитися на Джона", next: "john_reply" }
        ]
    },
    john_reply: {
        character: "Джон",
        text: "Звісно! Я ж геній, ти забув? Моя частина була готова ще до обіду. Тепер я просто насолоджуюсь цією чудовою офісною кавою і своєю бездоганністю.",
        nameColor: "#ff9800", // Помаранчевий колір для Джона
        choices: [
            { text: "Попросити Джона про допомогу", next: "ask_help" },
            { text: "Продовжити робити звіт самому", next: "do_alone" }
        ]
    },
    ask_help: {
        character: "Лололошка",
        text: "Можеш трохи допомогти мені з таблицями? Бос чекає на ці документи до кінця робочого дня.",
        nameColor: "#4fc3f7",
        choices: [
            { text: "Чекати на відповідь", next: "john_agrees" }
        ]
    },
    john_agrees: {
        character: "Джон",
        text: "Ну добре, добре... Тільки тому, що ми напарники. Але запам'ятай: з тебе велика порція лате на вихідних!",
        nameColor: "#ff9800",
        choices: [
            { text: "Почати спочатку", next: "start" }
        ]
    },
    do_alone: {
        character: "Лололошка",
        text: "Гаразд, я сам впораюся. Не хочу відволікати 'генія' від його важливого відпочинку.",
        nameColor: "#4fc3f7",
        choices: [
            { text: "Продовжити", next: "john_smirks" }
        ]
    },
    john_smirks: {
        character: "Джон",
        text: "Як знаєш! Але якщо що — я тут, сиджу поруч і виглядаю неймовірно у своєму білому костюмі.",
        nameColor: "#ff9800",
        choices: [
            { text: "Почати спочатку", next: "start" }
        ]
    }
};

let currentNode = "start";

// Отримуємо елементи з HTML
const characterNameEl = document.getElementById("character-name");
const dialogueTextEl = document.getElementById("dialogue-text");
const choicesContainerEl = document.getElementById("choices-container");

// Функція для відображення поточної сцени
function renderNode(nodeId) {
    const node = story[nodeId];

    // Оновлюємо ім'я та його колір
    characterNameEl.textContent = node.character;
    characterNameEl.style.color = node.nameColor;
    
    // Оновлюємо текст діалогу
    dialogueTextEl.textContent = node.text;

    // Очищаємо старі кнопки
    choicesContainerEl.innerHTML = "";

    // Створюємо нові кнопки вибору
    node.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.textContent = choice.text;
        
        // При натисканні переходимо до наступної сцени
        btn.onclick = () => renderNode(choice.next);
        
        choicesContainerEl.appendChild(btn);
    });
}

// Запускаємо гру з початкової сцени
renderNode(currentNode);
