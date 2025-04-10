const content = {
    'kaz': {
        title: 'Құрметті оқырмандар!',
        paragraphs: [
            'Сіздердің ойларыңызды, идеяларыңызды, ұсыныстарыңызды және сұрақтарыңызды есту – мен үшін өте маңызды. Әрбір жолданған пікір мен үшін құнды, себебі дәл сіздердің қолдауларыңыз бізді дамуға, жақсара түсуге шабыттандырады.',
            'Енді менімен тікелей байланысып, сізді толғандыратын мәселелермен бөлісуге мүмкіндік бар. Жазған барлық хабарламаларыңызды өзім оқып, қолымнан келгенше жауап беруге тырысамын.',
            'Ашық әрі сенімді диалог кітапханамызды әрқайсыңызға жақындай түседі деп сенемін.',
            'Ізгі ниетпен,',
            'Сеитова Күміс Қарсақбайқызы',
            'Қазақстан Республикасының Ұлттық академиялық кітапханасының директоры'
        ],
        name: 'Сеитова Күміс Қарсақбайқызы',
        position: 'Қазақстан Республикасының Ұлттық академиялық кітапханасының директоры'
    },
    'rus': {
        title: 'Дорогие читатели!',
        paragraphs: [
            'Мне важно слышать ваш голос — ваши мысли, идеи, предложения и вопросы. Каждое обращение для меня ценно, ведь именно вы вдохновляете нас развиваться и становиться лучше.',
            'Теперь у вас есть возможность напрямую делиться со мной тем, что волнует вас как читателя. Я буду лично читать все ваши сообщения и стараться отвечать на них.',
            'Верю, что открытый и доверительный диалог сделает нашу библиотеку ещё ближе к каждому из вас.',
            'С уважением,',
            'Сеитова Күмис Карсакбаевна',
            'Директор Национальной академической библиотеки Республики Казахстан'
        ],
        name: 'Сеитова Күмис Карсакбаевна',
        position: 'Директор Национальной академической библиотеки Республики Казахстан'
    },
    'eng': {
        title: 'Dear readers,',
        paragraphs: [
            'Dear readers,',
            'It is important for me to hear your voice — your thoughts, ideas, suggestions, and questions. Every message is valuable to me, as it is your support that inspires us to grow and improve.',
            'You now have the opportunity to contact me directly and share anything that concerns you as a reader. I will personally read all your messages and do my best to respond.',
            'With respect,',
            'Kumis Karsakbaevna Seitova',
            'Director of the National Academic Library of the Republic of Kazakhstan'
        ],
        name: 'Kumis Karsakbaevna Seitova',
        position: 'Director of the National Academic Library of the Republic of Kazakhstan'
    }
};

function changeLanguage(lang) {
    const titleElement = document.querySelector('.about-director h1');
    const paragraphElements = document.querySelectorAll('.about-director p');
    const nameElement = document.querySelector('.director-name h2');
    const positionElement = document.querySelector('.director-name p');
    
    if (titleElement && paragraphElements.length > 0) {
        titleElement.textContent = content[lang].title;
        paragraphElements.forEach((p, index) => {
            if (content[lang].paragraphs[index]) {
                p.textContent = content[lang].paragraphs[index];
            }
        });
    }

    if (nameElement && positionElement) {
        nameElement.textContent = content[lang].name;
        positionElement.textContent = content[lang].position;
    }

    document.querySelectorAll('.language-option').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    const formElements = {
        'rus': {
            title: 'Связаться со мной',
            namePlaceholder: 'Ваше имя',
            messagePlaceholder: 'Ваше сообщение',
            button: 'Отправить'
        },
        'kaz': {
            title: 'Маған хабарласу',
            namePlaceholder: 'Аты-жөніңіз',
            messagePlaceholder: 'Хабарламаңыз',
            button: 'Жіберу'
        },
        'eng': {
            title: 'Contact Me',
            namePlaceholder: 'Your Name',
            messagePlaceholder: 'Your Message',
            button: 'Send'
        }
    };

    const formTitle = document.querySelector('.contact-form h2');
    const nameInput = document.getElementById('nameInput');
    const messageInput = document.getElementById('messageInput');
    const submitButton = document.querySelector('.contact-form button[type="submit"]');

    if (formTitle) formTitle.textContent = formElements[lang].title;
    if (nameInput) nameInput.placeholder = formElements[lang].namePlaceholder;
    if (messageInput) messageInput.placeholder = formElements[lang].messagePlaceholder;
    if (submitButton) submitButton.textContent = formElements[lang].button;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.language-option[data-lang="rus"]').classList.add('active');
    
    document.querySelectorAll('.language-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            changeLanguage(lang);
        });
    });

    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('nameInput');
        const messageInput = document.getElementById('messageInput');
        
        if (nameInput && messageInput) {
            const name = nameInput.value;
            const message = messageInput.value;
            
            const mailtoLink = `mailto:nurzhan.zholdybalinov@gmail.com?subject=${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
            window.location.href = mailtoLink;
        }
    });
}); 
