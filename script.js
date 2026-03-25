document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: 'Кто создал Антиэлитрованую коалицию? ',
            options: ['Джей Покерман', 'Диамкей', 'Кролик Мун', 'Деб'],
            answer: 'Диамкей'
        },
        {
            question: 'Кто стал первым президентом MineSheld?',
            options: ['Альцест', 'МоддиЧат', 'Алоин', 'Нео'],
            answer: 'МоддиЧат'
        },
        {
            question: 'Кто был в "Хранителях"(1 сезон)?',
            options: ['Джаст, Деб, Жираф, Лилизет', 'Нео, Жираф, Джаст, Деб', 'Диамкей, Деб, Лилизет, Алфёдов', 'Алоин, Диамкей, Деб, Лаврин'],
            answer: 'Джаст, Деб, Жираф, Лилизет'
        },
        {
            question: 'Из-за чего участники MineShield 4 не могли спать?',
            options: ['Такого не было', 'Если игрок долго не спал появлялась бессоница', 'Из-за взаймодествия с Скрипунами', 'Из-за выхода за зону'],
            answer: 'Из-за выхода за зону'
        },
        {
            question: 'Для чего был создан Совет Майншилда II?',
            options: ['Для управления сервером и урегулирования конфликтов на смену президенству', 'Для наказание игроков с низким рейтингом', 'Для обсуждение аномалий сервера', 'Для обсуждения границ организаций'],
            answer: 'Для управления сервером и урегулирования конфликтов на смену президенству'
        },
        {
            question: 'Что было выданно Неадаптором на 2 сезоне?',
            options: ['Топоры Дровосек и Командный блок', 'Только топоры дровосек', 'Только командный блок', 'Ничего'],
            answer: 'Топоры Дровосек и Командный блок'
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function showQuiz() {
        if (currentQuestionIndex >= quizData.length) {
            document.getElementById('quiz').innerHTML = '';
            document.getElementById('submitBtn').style.display = 'none';
            document.getElementById('resultMsg').textContent = `У вас: ${score}/${quizData.length}`; // 
            return;
        }

        const questionEl = document.createElement('h2');
        questionEl.textContent = quizData[currentQuestionIndex].question;

        const optionsList = document.createElement('ul');
        for (let i = 0; i < quizData[currentQuestionIndex].options.length; i++) {
            const optionItem = document.createElement('li');
            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = 'answer';
            radioInput.value = quizData[currentQuestionIndex].options[i];
            optionItem.appendChild(radioInput);
            optionItem.appendChild(document.createTextNode(` ${quizData[currentQuestionIndex].options[i]}`));
            optionsList.appendChild(optionItem);
        }

        document.getElementById('quiz').innerHTML = '';
        document.getElementById('quiz').appendChild(questionEl);
        document.getElementById('quiz').appendChild(optionsList);
    }

    document.getElementById('submitBtn').addEventListener('click', () => {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (!selectedAnswer) {
            alert('Выберите вариант!');
            return;
        }

        if (selectedAnswer.value === quizData[currentQuestionIndex].answer) {
            score++;
        }

        currentQuestionIndex++;
        showQuiz();
    });

    showQuiz();
});
 let currentQuestionIndex = 0;
    let score = 0;

    const quizElement = document.getElementById('quiz');
    const submitBtn = document.getElementById('submitBtn');
    const resultMsg = document.getElementById('resultMsg');
    
    