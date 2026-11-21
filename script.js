<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Візуальна Новела</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Контейнер гри (можна приховати доки користувач не увійде через Firebase) -->
    <div id="game-container">
        <!-- Фонове зображення сцени -->
        <img id="scene-image" src="https://via.placeholder.com/800x600/2c2f33/ffffff?text=Background+Scene" alt="Сцена">
        
        <!-- Вікно діалогу -->
        <div id="dialogue-box">
            <div id="character-name">Ім'я персонажа</div>
            <div id="dialogue-text">Тут буде відображатися текст діалогу. Ви можете змінювати його за допомогою JavaScript.</div>
            
            <!-- Контейнер для кнопок вибору -->
            <div id="choices-container">
                <button class="choice-btn">Перший варіант відповіді</button>
                <button class="choice-btn">Другий варіант відповіді</button>
            </div>
        </div>
    </div>

</body>
</html>
