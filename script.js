document.getElementById('switch-to-es').addEventListener('click', function() {
    switchLanguage('es');
});

document.getElementById('switch-to-en').addEventListener('click', function() {
    switchLanguage('en');
});

function switchLanguage(language) {
    const elements = document.querySelectorAll('[data-es][data-en]');
    elements.forEach(element => {
        element.textContent = element.getAttribute(`data-${language}`);
    });
}
