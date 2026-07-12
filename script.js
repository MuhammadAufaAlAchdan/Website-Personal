const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.replace('bx-moon', 'bx-sun');
}

themeToggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.replace('bx-moon', 'bx-sun');
    } else {
        localStorage.setItem('theme', 'light');
        themeIcon.classList.replace('bx-sun', 'bx-moon');
    }
});